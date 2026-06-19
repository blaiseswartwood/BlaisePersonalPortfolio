import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';
import useInViewport from '../../hooks/useInViewport';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive 
      object = {earth.scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

const EarthCanvas = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  // autoRotate needs a live render loop — only run it while the globe is
  // actually on screen (and motion is allowed), otherwise freeze the frame.
  const [containerRef, inView] = useInViewport('120px', 0);
  const animate = inView && !prefersReducedMotion;

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        shadows
        frameloop={animate ? 'always' : 'demand'}
        dpr={[1, 1.5]}
        gl={{preserveDrawingBuffer:true, powerPreference: 'high-performance'}}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4,3,6]
        }}
      >
        <Suspense fallback={<CanvasLoader />}> 
          <OrbitControls 
            autoRotate={!prefersReducedMotion}
            enableZoom = {false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          />
          <Earth/>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default EarthCanvas;