import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../utils/motion";
import "./Loader.css";
export const InitialLoader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      animate="enter"
      initial="initial"
      exit="exit"
      className="introduction relative flex h-screen flex-col items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute right-10 top-10 z-10">
            <motion.h1
              exit={{ y: -500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="name animate-slideleftT3"
              style={{ fontFamily: "March Evoked" }}
            >
              UI/UX
            </motion.h1>
            <h1
              className="name animate-slideleftT4"
              style={{ fontFamily: "March Evoked" }}
            >
              Designer
            </h1>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Counter from={0} to={100} />
            </div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="500px"
              height="500px"
              viewBox="0 0 500 500"
              xmlSpace="preserve"
              className="spin"
            >
              <path
                id="circlePath"
                d="M 110, 250 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0"
                fill="none"
              />
              <g>
                <use xlinkHref="#circlePath" />
                <text
                  className="fill-slate-300 dark:fill-black"
                  fontSize="22px"
                >
                  <textPath xlinkHref="#circlePath">
                    Loading • Loading • Loading • Loading • Loading • Loading •
                    Loading • Loading • Loading •
                  </textPath>
                </text>
              </g>
            </svg>
          </motion.div>
          <div className="absolute bottom-10 left-10 z-10">
            <motion.h1
              exit={{ y: -500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="name animate-sliderightT4"
              style={{ fontFamily: "March Evoked" }}
            >
              Ramanan
            </motion.h1>
            <motion.h1
              exit={{ y: -500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="name animate-sliderightT3"
              style={{ fontFamily: "March Evoked" }}
            >
              Balamurugan
            </motion.h1>
          </div>
          <svg className="curve">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

import { animate } from "framer-motion";
import { useRef } from "react";

const Counter = ({ from, to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node: any = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        node.textContent = value.toFixed(0) + "%";
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <p
      ref={nodeRef}
      className="text-2xl font-bold text-slate-300 dark:text-black"
    />
  );
};
