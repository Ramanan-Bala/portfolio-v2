import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useCallback, useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-2xl shadow-purple-500/30"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
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
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-7 h-[100px]"
      >
        {description[content]}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export const About = SectionWrapper(AboutSection, "about");
