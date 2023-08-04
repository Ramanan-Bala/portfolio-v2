import { Suspense, useEffect, useRef, useState } from "react";
import "./Loader.css";

import {
  animate,
  // cubicBezier,
  // motion,
  useMotionValue,
  // useTransform,
} from "framer-motion";
// import { words } from "./data";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { a as three, useSpring } from "@react-spring/three";
import { a as web } from "@react-spring/web";

const Laptop = ({ open, hinge, ...props }) => {
  const group: any = useRef();
  // Load model
  const { nodes, materials }: any = useGLTF("/mac-draco.glb");
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useEffect(() => {
    console.log(typeof open === "boolean");
  }, [open]);
  // Make it float in the air when it's opened
  useFrame((state) => {
    if (typeof open == "boolean") {
      const t = state.clock.getElapsedTime();
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        open ? Math.cos(t / 10) / 10 + 0.25 : 0,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        open ? Math.sin(t / 10) / 4 : 0,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        open ? Math.sin(t / 10) / 10 : 0,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        open ? (-2 + Math.sin(t)) / 3 : -4.3,
        0.1
      );
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        open ? 2 : 0,
        0.1
      );
    } else {
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        25,
        0.1
      );
    }
  });
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(_) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

export const InitialLoader = ({ isClicked }) => {
  // const easing = cubicBezier(0.5, -0.4, 0.3, 1.25);

  const count = useMotionValue(0);
  // const rounded = useTransform(count, (latest) => Math.round(latest));

  const completeLoading = () => {
    if (!open) setOpen(true);
    else {
      setOpen("Complete");
      setTimeout(() => isClicked(), 1000);
    }
  };

  // const [isComplete, setIsComplete] = useState(false);

  // This flag controls open state, alternates between true & false
  const [open, setOpen]: any = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({
    open: Number(typeof open === "boolean" ? open : true),
  });

  useEffect(() => {
    const controls = animate(count, 100, { ease: "easeInOut", duration: 2.2 });

    return controls.stop;
  });

  return (
    <>
      <web.main
        style={{
          background: props.open.to([0, 1], ["#050816", "#151030"]),
          height: "100vh",
          opacity: open === "Complete" ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <web.h1
          style={{
            transform: props.open.to((o) => `translate3d(-50%,${o * -40}vh,0)`),
            color: "#f2f2f2",
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
          }}
        >
          {!open ? "Click to open..!" : "Click to go..."}
        </web.h1>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <three.pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
          />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), completeLoading())}
            >
              <Laptop
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
              />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            opacity={0.4}
            scale={20}
            blur={1.75}
            far={4.5}
          />
        </Canvas>
      </web.main>
      {/* {isComplete && (
        <motion.div className="logoAnimate">
          <motion.svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              d="M15 1.5L3.29999 8.1V21.6L15 28.5L26.7 21.9V8.4L15 1.5Z"
              stroke="#08FDD8"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.5 },
              }}
              d="M12 10.8H14.3891C15.9818 10.8 17.008 11.2718 17.4677 12.2153C17.633 12.5621 17.7157 12.9532 17.7157 13.3887C17.7157 13.8202 17.6572 14.1851 17.5403 14.4835C17.4274 14.7819 17.2681 15.0379 17.0625 15.2517C16.6673 15.6629 16.123 15.9331 15.4294 16.0621C15.7157 16.9452 16.2016 17.5541 16.8871 17.8888C17.1129 18.0017 17.3024 18.0621 17.4556 18.0702C17.7137 18.0783 17.8951 18.0702 18 18.046V19.2194H17.7278C16.8206 19.2194 16.0484 18.8968 15.4113 18.2516C14.8508 17.6912 14.4738 16.9855 14.2802 16.1347H13.2097V19.2194H12V10.8ZM14.3104 15.1669C15.0403 15.1669 15.5806 15.0258 15.9314 14.7435C16.2822 14.4613 16.4576 14.0218 16.4576 13.425C16.4576 12.6307 16.0887 12.1186 15.3508 11.8888C15.0927 11.8081 14.7802 11.7678 14.4133 11.7678H13.2097V15.1669H14.3104Z"
              fill="#08FDD8"
            />
          </motion.svg>
        </motion.div>
      )}
      {!isComplete && (
        <motion.div
          className="loader__wrapper"
          initial={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
          }}
          transition={{ ease: "easeInOut", duration: 3, delay: 1.5 }}
          onAnimationComplete={() => setIsComplete(true)}
        >
          <div className="loader__progressWrapper">
            <div className="loader__progress"></div>
            <span className="loader__progressNumber">0</span>
          </div>
          <div className="loader">
            <div className="loader__words">
              <div className="loader__overlay"></div>
              <motion.div
                className="loader__wordsGroup"
                animate={{ transform: "translateY(-80%)" }}
                transition={{ ease: easing, duration: 3 }}
              >
                {words.map((word, index) => {
                  return (
                    <span key={index} className="loader__word">
                      {word}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      <motion.div
        className="absolute bottom-0 h-[40px] bg-[#242938] flex items-center justify-end"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 3 }}
      >
        <motion.span className="text-lg text-gray font-medium mr-8">
          {rounded}
        </motion.span>
      </motion.div> */}
    </>
  );
};
