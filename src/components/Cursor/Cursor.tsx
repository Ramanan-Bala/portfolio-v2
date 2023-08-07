import { useCallback, useEffect, useState } from "react";
import "./Cursor.css";

import { motion } from "framer-motion";

export const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState("");

  const [isClick, setIsClick] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", (e: any) => {
      handleMouseMove(e);
      const cursor = window.getComputedStyle(e.target)["cursor"];
      if (cursor !== cursorStyle) setCursorStyle(cursor);
    });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorStyle, handleMouseDown]);

  return (
    <>
      {/* <div id="cursorDot"></div>
      <div id="cursor"></div> */}
      {mousePos ? (
        <>
          {/* <motion.div
            className="dark:border-white border-[#915eff] border-2"
            animate={{
              position: "fixed",
              opacity: 1,
              height: 25,
              width: 25,
              fontSize: "16px",
              borderRadius: "100%",
              backgroundColor: "#915eff",
              scale: isClick ? 1.5 : 1,
              x: mousePos.x - 14,
              y: mousePos.y - 14,
              zIndex: 9999,
            }}
            transition={{
              type: "tween",
              duration: 0.05,
            }}
          ></motion.div> */}
          <motion.div
            animate={cursorStyle}
            className="border-[#915eff] bg-[#915eff] border-2"
            variants={{
              auto: {
                opacity: 1,
                height: 24,
                width: 24,
                scale: isClick ? 1.5 : 1,
                position: "fixed",
                borderRadius: "100%",
                x: mousePos.x - 14,
                y: mousePos.y - 14,
                zIndex: 9999,
              },
              pointer: {
                opacity: 0.3,
                height: 72,
                width: 72,
                scale: isClick ? 0.5 : 1,
                position: "fixed",
                borderRadius: "100%",
                x: mousePos.x - 39,
                y: mousePos.y - 39,
                zIndex: 9999,
              },
            }}
            transition={{
              type: "tween",
              duration: 0.05,
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};
