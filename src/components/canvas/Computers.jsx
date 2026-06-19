import React, { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";
import useInViewport from "../../hooks/useInViewport";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const Computers = memo(({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

Computers.displayName = "Computers";

const ComputersCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const prefersReducedMotion = usePrefersReducedMotion();
  // Freeze the render loop (keeps the last frame) whenever the hero scrolls
  // off-screen so the GPU isn't busy rendering the model down the page.
  const [containerRef, inView] = useInViewport("0px", 0);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <Canvas
        frameloop={inView ? "always" : "demand"}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={!prefersReducedMotion}
            autoRotateSpeed={0.8}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;