import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./text.css";

export const TextScrollEffect = ({ phrase }) => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [phrase]);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className="text-xl leading-10 font-medium mr-1" key={word + "_" + i}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
          className="text-white"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={container} className="main">
      <div ref={body} className="body">
        {splitWords(phrase)}
      </div>
    </main>
  );
};
