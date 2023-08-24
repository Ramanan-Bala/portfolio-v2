import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Reveal } from "../hoc/reveal";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        transition={{ duration: 0.5 }}
        className="violet-gradient-background cursor-pointer rounded-[20px] p-[1px] shadow-card"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-slate-100 px-12 py-5 shadow-2xl shadow-purple-500/30 dark:bg-tertiary"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-slate-800 dark:text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutSection = () => {
  return (
    <>
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
        <p className="mt-4 max-w-3xl text-[17px] leading-7 text-slate-600 dark:text-secondary">
          I create successful restful api that are fast, easy to use, and built
          with best practices. I have experience in creating api using libraries
          like Spring-Boot, Node ExpressJS, Sequelize, Mongoose and Django.
        </p>
      </Reveal>
      <div className="mt-20 flex max-w-fit flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export const About = SectionWrapper(AboutSection, "about");
