import { scale, slide } from "../utils/motion";
import { motion } from "framer-motion";

export const NavLink = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <a
        href={`#${href}`}
        className={`${
          isActive ? "text-gray" : "text-secondary"
        } cursor-pointer text-5xl font-semibold`}
      >
        {title}
      </a>
    </motion.div>
  );
};
