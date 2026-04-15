import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

// Layer colors: warm-to-cool gradient across the network
const LAYER_COLORS = [
  new THREE.Color('#ff6f00'),  // Input — amber
  new THREE.Color('#f06292'),  // Hidden 1 — rose
  new THREE.Color('#ab47bc'),  // Hidden 2 — orchid
  new THREE.Color('#5c6bc0'),  // Hidden 3 — indigo
  new THREE.Color('#26c6da'),  // Hidden 4 — teal
  new THREE.Color('#66bb6a'),  // Output — emerald
];

const PULSE_COLORS = [
  new THREE.Color('#ffd54f'),  // Gold
  new THREE.Color('#80deea'),  // Light cyan
  new THREE.Color('#ce93d8'),  // Lavender
];

// Generate neural network layer positions — wider, cleaner layout
const generateNetwork = () => {
  const layers = [3, 5, 7, 7, 5, 3];
  const nodes = [];
  const edges = [];
  const layerSpacing = 7.0;
  const offsetX = -(layers.length - 1) * layerSpacing / 2;

  layers.forEach((count, layerIdx) => {
    const nodeSpacing = 2.0;
    const offsetY = -(count - 1) * nodeSpacing / 2;
    for (let i = 0; i < count; i++) {
      nodes.push({
        position: [
          offsetX + layerIdx * layerSpacing,
          offsetY + i * nodeSpacing,
          (Math.random() - 0.5) * 0.5,
        ],
        layer: layerIdx,
      });
    }
  });

  // Connect adjacent layers — sparser connections
  let nodeOffset = 0;
  for (let l = 0; l < layers.length - 1; l++) {
    const nextOffset = nodeOffset + layers[l];
    for (let i = 0; i < layers[l]; i++) {
      for (let j = 0; j < layers[l + 1]; j++) {
        if (Math.random() > 0.5) {
          edges.push([nodeOffset + i, nextOffset + j]);
        }
      }
    }
    nodeOffset += layers[l];
  }

  return { nodes, edges };
};

const NetworkEdges = ({ nodes, edges }) => {
  const ref = useRef();

  const { geometry, colors } = useMemo(() => {
    const positions = [];
    const colorArr = [];
    edges.forEach(([from, to]) => {
      positions.push(...nodes[from].position, ...nodes[to].position);
      const c1 = LAYER_COLORS[nodes[from].layer];
      const c2 = LAYER_COLORS[nodes[to].layer];
      colorArr.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colorArr, 3));
    return { geometry: geo, colors: colorArr };
  }, [nodes, edges]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.18 + Math.sin(clock.elapsedTime * 0.6) * 0.06;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial vertexColors transparent opacity={0.2} />
    </lineSegments>
  );
};

const NetworkNodes = ({ nodes }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorArray = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3);
    nodes.forEach((node, i) => {
      const c = LAYER_COLORS[node.layer];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    });
    return arr;
  }, [nodes]);

  const nodeData = useMemo(() => {
    return nodes.map((node) => ({
      ...node,
      pulseOffset: Math.random() * Math.PI * 2,
      baseScale: 0.07 + Math.random() * 0.03,
    }));
  }, [nodes]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    nodeData.forEach((node, i) => {
      dummy.position.set(...node.position);
      const pulse = node.baseScale + Math.sin(t * 2 + node.pulseOffset) * 0.02;
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, nodes.length]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#915EFF"
        emissiveIntensity={0.8}
        transparent
        opacity={0.95}
      />
      <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
    </instancedMesh>
  );
};

// Data pulse particles traveling along edges
const DataPulses = ({ nodes, edges }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pulseCount = Math.min(edges.length, 40);

  const pulseData = useMemo(() => {
    return Array.from({ length: pulseCount }, (_, i) => ({
      edgeIdx: i % edges.length,
      speed: 0.4 + Math.random() * 0.6,
      offset: Math.random(),
      colorIdx: Math.floor(Math.random() * PULSE_COLORS.length),
    }));
  }, [edges, pulseCount]);

  const colorArray = useMemo(() => {
    const arr = new Float32Array(pulseCount * 3);
    pulseData.forEach((p, i) => {
      const c = PULSE_COLORS[p.colorIdx];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    });
    return arr;
  }, [pulseData, pulseCount]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    pulseData.forEach((pulse, i) => {
      const [from, to] = edges[pulse.edgeIdx];
      const progress = ((t * pulse.speed + pulse.offset) % 1);
      const fromPos = nodes[from].position;
      const toPos = nodes[to].position;
      dummy.position.set(
        fromPos[0] + (toPos[0] - fromPos[0]) * progress,
        fromPos[1] + (toPos[1] - fromPos[1]) * progress,
        fromPos[2] + (toPos[2] - fromPos[2]) * progress
      );
      // Scale pulses with a glow effect
      const glow = 0.035 + Math.sin(t * 4 + pulse.offset * 10) * 0.01;
      dummy.scale.setScalar(glow);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, pulseCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffab40"
        emissiveIntensity={1.5}
        transparent
        opacity={0.9}
      />
      <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
    </instancedMesh>
  );
};

const NeuralNetworkScene = () => {
  const groupRef = useRef();
  const { nodes, edges } = useMemo(() => generateNetwork(), []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.12) * 0.35;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 5, 6]} intensity={1} color="#7c4dff" />
      <pointLight position={[-6, -4, 4]} intensity={0.6} color="#00e676" />
      <pointLight position={[0, 6, 3]} intensity={0.3} color="#ff4081" />
      <NetworkEdges nodes={nodes} edges={edges} />
      <NetworkNodes nodes={nodes} />
      <DataPulses nodes={nodes} edges={edges} />
    </group>
  );
};

const NeuralNetworkCanvas = () => {
  return (
    <div className="w-full h-[350px] sm:h-[450px]">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <NeuralNetworkScene />
        <Preload all />
      </Canvas>
    </div>
  );
};

export const NeuralNetworkBackground = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden pb-10">
      {/* Subtle background tint to stand out from page */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, rgba(12,7,32,0.9) 0%, rgba(15,10,40,1) 15%, rgba(15,10,40,1) 85%, rgba(12,7,32,0.9) 100%)' }}
      />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(145,94,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gradient glow orbs in corners */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-orb-drift-1 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,111,0,0.2) 0%, transparent 60%)', filter: 'blur(50px)' }}
      />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-orb-drift-3 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(38,198,218,0.2) 0%, transparent 60%)', filter: 'blur(50px)' }}
      />
      <div className="absolute top-[30%] right-[-3%] w-[350px] h-[350px] rounded-full bg-orb-drift-2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(171,71,188,0.15) 0%, transparent 60%)', filter: 'blur(50px)' }}
      />
      <div className="absolute bottom-[20%] left-[-3%] w-[300px] h-[300px] rounded-full bg-orb-drift-1 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(102,187,106,0.15) 0%, transparent 60%)', filter: 'blur(50px)' }}
      />
      {/* Neural network canvas — extends beyond content with extra height */}
      <div className="absolute pointer-events-none opacity-35 z-0" style={{ top: '-10%', bottom: '-10%', left: 0, right: 0 }}>
        {isVisible && (
          <Canvas
            camera={{ position: [0, 0, 18], fov: 100 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%' }}
          >
            <NeuralNetworkScene />
            <Preload all />
          </Canvas>
        )}
      </div>
      <div className="relative z-[1]">
        {children}
      </div>
    </div>
  );
};

export default NeuralNetworkCanvas;
