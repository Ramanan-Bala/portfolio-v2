import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
// import { ParticleContainer } from "./canvas";
import { Reveal } from "../hoc/reveal";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
      intersectionObserverProps={{ triggerOnce: false }}
    >
      <div>
        <h3 className="text-[24px] font-bold text-slate-800 dark:text-white">
          {experience.title}
        </h3>
        <p className="!m-0 text-base font-semibold text-secondary">
          {experience.company_name}
        </p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-sm tracking-wider text-slate-600 dark:text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceSection = () => {
  return (
    <>
      {/* <ParticleContainer /> */}
      <div>
        <Reveal>
          <p className={styles.sectionSubText}>What I have done so far</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.sectionHeadText}>
            Work Experience<span className="dot">.</span>
          </h2>
        </Reveal>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="linear-gradient(-180deg,#804dee 0%,rgb(236, 64, 122) 60%,rgb(253, 216, 53) 70%,rgb(253, 216, 53, 0) 100%)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export const Experience = SectionWrapper(ExperienceSection, "work");
