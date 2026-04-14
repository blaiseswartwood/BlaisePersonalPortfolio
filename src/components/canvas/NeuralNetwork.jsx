import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

// Generate neural network layer positions
const generateNetwork = () => {
  const layers = [4, 6, 8, 6, 4, 2];
  const nodes = [];
  const edges = [];
  const layerSpacing = 1.6;
  const offsetX = -(layers.length - 1) * layerSpacing / 2;

  layers.forEach((count, layerIdx) => {
    const nodeSpacing = 1.2;
    const offsetY = -(count - 1) * nodeSpacing / 2;
    for (let i = 0; i < count; i++) {
      nodes.push({
        position: [
          offsetX + layerIdx * layerSpacing,
          offsetY + i * nodeSpacing,
          (Math.random() - 0.5) * 0.8,
        ],
        layer: layerIdx,
      });
    }
  });

  // Connect adjacent layers
  let nodeOffset = 0;
  for (let l = 0; l < layers.length - 1; l++) {
    const nextOffset = nodeOffset + layers[l];
    for (let i = 0; i < layers[l]; i++) {
      for (let j = 0; j < layers[l + 1]; j++) {
        // Skip some connections for visual clarity
        if (Math.random() > 0.4) {
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
  const lineGeometry = useMemo(() => {
    const positions = [];
    edges.forEach(([from, to]) => {
      positions.push(...nodes[from].position, ...nodes[to].position);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  }, [nodes, edges]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.12 + Math.sin(clock.elapsedTime * 0.8) * 0.04;
    }
  });

  return (
    <lineSegments ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial color="#915EFF" transparent opacity={0.15} />
    </lineSegments>
  );
};

const NetworkNodes = ({ nodes }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const nodeData = useMemo(() => {
    return nodes.map((node, i) => ({
      ...node,
      pulseOffset: Math.random() * Math.PI * 2,
      baseScale: 0.06 + Math.random() * 0.04,
    }));
  }, [nodes]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    nodeData.forEach((node, i) => {
      dummy.position.set(...node.position);
      const pulse = node.baseScale + Math.sin(t * 1.5 + node.pulseOffset) * 0.015;
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, nodes.length]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#915EFF"
        emissive="#915EFF"
        emissiveIntensity={0.6}
        transparent
        opacity={0.9}
      />
    </instancedMesh>
  );
};

// Data pulse particles traveling along edges
const DataPulses = ({ nodes, edges }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pulseCount = Math.min(edges.length, 30);

  const pulseData = useMemo(() => {
    return Array.from({ length: pulseCount }, (_, i) => ({
      edgeIdx: i % edges.length,
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random(),
    }));
  }, [edges, pulseCount]);

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
      dummy.scale.setScalar(0.03);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, pulseCount]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial
        color="#00cea8"
        emissive="#00cea8"
        emissiveIntensity={1.2}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
};

const NeuralNetworkScene = () => {
  const groupRef = useRef();
  const { nodes, edges } = useMemo(() => generateNetwork(), []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#915EFF" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#00cea8" />
      <NetworkEdges nodes={nodes} edges={edges} />
      <NetworkNodes nodes={nodes} />
      <DataPulses nodes={nodes} edges={edges} />
    </group>
  );
};

const NeuralNetworkCanvas = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <NeuralNetworkScene />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkCanvas;
