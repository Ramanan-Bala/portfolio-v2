import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Loader } from "../Loader";

const Computer = ({ isMobile }) => {
  const computer = useGLTF("./dog.glb");

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={isMobile ? 0 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 1}
        position={isMobile ? [0, -2, -0.2] : [0, -3, 0]}
        rotation={isMobile ? [0, 0.4, 0] : [0, 2, 0]}
      />
    </mesh>
  );
};

export const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (mediaQuery: MediaQueryListEvent) => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <Computer isMobile={isMobile} />
        <OrbitControls
          // autoRotate={!isMobile}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
