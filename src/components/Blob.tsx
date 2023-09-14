// import useSpline from "@splinetool/r3f-spline";
// import { OrthographicCamera, Preload } from "@react-three/drei";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Loader } from "./Loader";

// export const Scene = ({ ...props }) => {
//   const { nodes, materials } = useSpline(
//     "https://prod.spline.design/52XTrpSFcbSN4VJY/scene.splinecode",
//   );
//   return (
//     <>
//       <color attach="background" args={["#f2f5fe"]} />
//       <group {...props} dispose={null}>
//         <scene name="Scene 1">
//           <mesh
//             name="Sphere"
//             geometry={nodes.Sphere.geometry}
//             material={materials["Sphere Material"]}
//             castShadow
//             receiveShadow
//           />
//           <directionalLight
//             name="Directional Light"
//             castShadow
//             intensity={0.7}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1000}
//             shadow-camera-right={1000}
//             shadow-camera-top={1000}
//             shadow-camera-bottom={-1000}
//             position={[200, 300, 300]}
//           />
//           <OrthographicCamera
//             name="1"
//             makeDefault={true}
//             far={10000}
//             near={-50000}
//           />
//           <hemisphereLight
//             name="Default Ambient Light"
//             intensity={0.75}
//             color="#eaeaea"
//           />
//         </scene>
//       </group>
//     </>
//   );
// };

// export const Blob3D2 = () => {
//   return (
//     <Canvas frameloop="demand" shadows>
//       <Suspense fallback={<Loader />}>
//         <Scene />
//         <OrbitControls
//           // autoRotate={!isMobile}
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2.2}
//           minPolarAngle={Math.PI / 2.2}
//         />
//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// import Spline from "@splinetool/react-spline";

// export const Blob3D = () => {
//   return (
//     <Spline scene="https://prod.spline.design/52XTrpSFcbSN4VJY/scene.splinecode" />
//   );
// };
