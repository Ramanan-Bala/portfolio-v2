import { motion } from "framer-motion";

import { styles } from "./styles";
import { useMousePosition } from "./utils/useMousePosition";
import { useState } from "react";

export const Mask = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.div
      className="w-full mx-auto mask"
      animate={{
        // WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskPositionX: `${x - size / 2}px`,
        WebkitMaskPositionY: `${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      <div className="h-screen relative">
        <div
          className={`${styles.paddingX} pt-32 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-dark`}>
              <span className="font-medium">Hey, I'm</span> Ramanan
              <span className="text-white">.</span>
            </h1>
            <p
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className={`${styles.heroSubText} mt-2 text-dark max-w-max`}
            >
              Hello! My name is Ramanan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to see what my dad is doing — turns out hacking
              together a custom html components taught me a lot about HTML &
              CSS!
            </p>
          </div>
        </div>
        <div className="absolute xs:bottom-8 bottom-[120px] w-full flex justify-center items-center">
          <a
            href="#about"
            className="dark:text-tertiary text-white-100 flex items-center gap-5 font-semibold"
          >
            <div className="w-9 h-16 rounded-3xl border-4 dark:border-slate-800 border-white-100 flex justify-center items-start p-2">
              <motion.div
                className="w-3 h-3 rounded-full dark:bg-slate-800 bg-white-100 mb-1"
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
            <span className="flex items-center gap-1">
              Scroll down
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20 min-h-screen`}
      >
        <div>
          <p className={`${styles.sectionSubText} text-dark`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-dark`}>
            Overview<span className="text-white">.</span>
          </h2>
        </div>
        <p
          className="mt-4 text-[17px] max-w-3xl leading-7 h-[120px] text-dark"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, experienced in developing
          real-time applications, animations, and coding interactive layouts.
        </p>
      </div>
      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12 min-h-screen`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <p className={`${styles.sectionSubText} text-dark`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-dark`}>
          Work Experience<span className="text-white">.</span>
        </h2>
      </div>
    </motion.div>
  );
};
