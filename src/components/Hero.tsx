import { motion } from "framer-motion";
import { styles } from "../styles";
import { Computers } from ".";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white flex items-center flex-wrap`}
            style={{ fontFamily: "Lora" }}
          >
            Hi, I'm &nbsp;
            <span
              className="text-[#915eff] block lg:hidden"
              style={{ fontFamily: "Lora" }}
            >
              Ramanan
            </span>
            <motion.svg className="hero-name max-h-[90px] flex-grow lg:block hidden">
              <text x="0%" y="75%" textAnchor="start">
                Ramanan Balamurugan
              </text>
            </motion.svg>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hello! My name is Ramanan and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to see what my dad is doing — turns out hacking
            together a custom html components taught me a lot about HTML & CSS!
          </p>
        </div>
      </div>
      <Computers />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
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
        </a>
      </div>
    </section>
  );
};
