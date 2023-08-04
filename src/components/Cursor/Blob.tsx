import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Blob = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", (e: any) => {
      handleMouseMove(e);
    });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      id="blob"
      animate={{
        height: 300,
        width: 300,
        background: "linear-gradient(to right, aquamarine, mediumpurple)",
        position: "fixed",
        // top: "50%",
        // left: "50%",
        // transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px})`,
        x: mousePos.x - 200,
        y: mousePos.y - 200,
        borderRadius: "50%",
        filter: "blur(200px)",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
      }}
    ></motion.div>
  );
};
