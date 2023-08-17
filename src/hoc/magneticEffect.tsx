import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const MagneticEffect = ({ children }) => {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
