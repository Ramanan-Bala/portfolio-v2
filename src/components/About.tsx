import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { useCallback, useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { Reveal } from "../hoc/reveal";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        transition={{ duration: 0.5 }}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="dark:bg-tertiary bg-slate-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-2xl shadow-purple-500/30"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="dark:text-white text-slate-800 text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutSection = () => {
  const [content, setContent] = useState(1);
  let description = [
    "I create successful restful api that are fast, easy to use, and built with best practices. I have experience in creating api using libraries like Spring-Boot, Node ExpressJS, Sequelize, Mongoose and Django.",
    "I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, experienced in developing real-time applications, animations, and coding interactive layouts.",
  ];

  const shuffle = useCallback(() => {
    if (content === 0) setContent(1);
    else setContent(0);
  }, [content]);

  useEffect(() => {
    const intervalID = setInterval(() => shuffle(), 5000);
    return () => clearInterval(intervalID);
  });
  return (
    <div className="min-h-screen">
      <div>
        <Reveal>
          <p className={styles.sectionSubText}>Introduction</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.sectionHeadText}>
            Overview<span className="dot">.</span>
          </h2>
        </Reveal>
      </div>
      <Reveal>
        <p className="mt-4 dark:text-secondary text-slate-600 text-[17px] max-w-3xl leading-7 h-[120px]">
          {description[content]}
        </p>
      </Reveal>
      <div className="mt-20 flex flex-wrap gap-10 max-w-fit">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export const About = SectionWrapper(AboutSection, "about");
