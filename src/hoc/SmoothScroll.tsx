import {
  useRef,
  useState,
  // useCallback,
  // useLayoutEffect,
  useEffect,
} from "react";
// import ResizeObserver from "resize-observer-polyfill";
// import { useScroll, useTransform, useSpring, motion } from "framer-motion";

export const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  // const [pageHeight, setPageHeight] = useState(0);

  // const resizePageHeight = useCallback((entries) => {
  //   for (let entry of entries) {
  //     setPageHeight(entry.contentRect.height);
  //   }
  // }, []);

  // useLayoutEffect(() => {
  //   const resizeObserver = new ResizeObserver((entries) =>
  //     resizePageHeight(entries),
  //   );
  //   scrollRef && resizeObserver.observe(scrollRef.current);
  //   return () => resizeObserver.disconnect();
  // }, [scrollRef, resizePageHeight]);

  // const { scrollY } = useScroll();
  // const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  // const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  // const spring = useSpring(transform, physics);

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

    scrollRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div
        ref={scrollRef}
        // style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </div>
      {/* <div style={{ height: size.height }} /> */}
    </>
  );
};

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
