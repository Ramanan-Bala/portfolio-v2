import { useRef, useEffect } from "react";
import useWindowSize from "../utils/useWindowSize";

export const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const size = useWindowSize();

  useEffect(() => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    data.current = window.scrollY;

    data.previous += (data.current - data.previous) * data.ease;

    data.rounded = Math.round(data.previous * 100) / 100;

    scrollRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div ref={scrollRef} className="scroll-container">
        {children}
      </div>
    </>
  );
};

export const SkewScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const size = useWindowSize();

  useEffect(() => {
    document.body.style.height = `${
      scrollRef.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    data.current = window.scrollY;

    data.previous += (data.current - data.previous) * data.ease;

    data.rounded = Math.round(data.previous * 100) / 100;

    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 20;

    scrollRef.current.style.transform = `skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div ref={scrollRef}>{children}</div>
    </>
  );
};
