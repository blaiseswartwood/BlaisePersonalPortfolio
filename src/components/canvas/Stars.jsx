import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

/**
 * Generate points uniformly distributed inside a sphere.
 * Done manually (instead of maath's inSphere) to guarantee every value is
 * finite — the old approach occasionally produced NaN positions which made
 * THREE.computeBoundingSphere throw and the whole star field disappear.
 */
const generateSpherePoints = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    // cube-root keeps the distribution uniform across the sphere's volume
    const r = radius * Math.cbrt(Math.random());
    const sinPhi = Math.sin(phi);
    positions[i * 3] = r * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const StarLayer = ({ count, radius, color, size, speed, animate }) => {
  const ref = useRef();
  const positions = useMemo(() => generateSpherePoints(count, radius), [count, radius]);

  useFrame((_, delta) => {
    if (!ref.current || !animate) return;
    // Clamp delta so the field doesn't lurch after the tab regains focus.
    const d = Math.min(delta, 0.1);
    ref.current.rotation.x -= (d / 10) * speed;
    ref.current.rotation.y -= (d / 15) * speed;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <group rotation={[0, 0, Math.PI / 4]}>
            {/* Distant violet haze */}
            <StarLayer
              count={1800}
              radius={1.4}
              color="#915EFF"
              size={0.0018}
              speed={0.6}
              animate={!prefersReducedMotion}
            />
            {/* Nearer pink sparkle layer for parallax depth */}
            <StarLayer
              count={1200}
              radius={1.1}
              color="#f272c8"
              size={0.0028}
              speed={1}
              animate={!prefersReducedMotion}
            />
          </group>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;