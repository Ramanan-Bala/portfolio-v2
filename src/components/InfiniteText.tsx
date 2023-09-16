import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  direction: number;
}

export const Text = ({
  children,
  baseVelocity = 100,
  direction = 1,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, -1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(direction);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * (baseVelocity / 4) * (delta / 1000);
    if (direction == 1) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    } else {
      if (velocityFactor.get() < 0) {
        directionFactor.current = 1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = -1;
      }
    }

    moveBy +=
      directionFactor.current * moveBy * velocityFactor.get() * direction;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      initial={{ maxWidth: 0 }}
      animate={{ maxWidth: "100%" }}
      transition={{ duration: 1 }}
      className="parallax"
    >
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </motion.div>
  );
};
