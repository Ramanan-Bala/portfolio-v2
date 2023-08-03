import { Ball } from ".";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const TechSection = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export const Tech = SectionWrapper(TechSection, "tech");
