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
          <motion.div
            className="dark:border-white border-primary border-2"
            animate={{
              position: "fixed",
              opacity: 1,
              height: 4,
              width: 4,
              fontSize: "16px",
              borderRadius: "100%",
              backgroundColor: "#f2f2f2",
              x: mousePos.x - 4,
              y: mousePos.y - 4,
              zIndex: 9999,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>
          <motion.div
            animate={cursorStyle}
            className="dark:border-white border-primary border-2"
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
                opacity: 0.2,
                height: 48,
                width: 48,
                scale: isClick ? 0.5 : 1,
                position: "fixed",
                backgroundColor: "#f2f2f2",
                borderRadius: "100%",
                x: mousePos.x - 26,
                y: mousePos.y - 26,
                zIndex: 9999,
              },
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};
