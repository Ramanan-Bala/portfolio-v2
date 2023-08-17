import { useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [orgMouseY, setMouseY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, 4123], [0, 4123]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const updateMousePosition = (event) => {
    const { clientX, clientY } = event;
    const { scrollX, scrollY } = window;

    const mouseX = clientX + scrollX;
    const mouseY = clientY + scrollY;
    setMouseY(clientY);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { x } = mousePosition;
      const { scrollX, scrollY } = window;

      const mouseX = x + scrollX;
      const mouseY = orgMouseY + scrollY;

      setMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mousePosition]);

  return mousePosition;
};
