import { motion } from "framer-motion";
import "./Loader.css";

export const InitialLoader = ({ isClicked }) => {
  return (
    <div className="loader flex h-screen flex-col items-center justify-center bg-slate-100 transition-all duration-300 dark:bg-primary">
      <svg>
        <g>
          <path d="M 50,100 A 1,1 0 0 1 50,0" />
        </g>
        <g>
          <path d="M 50,75 A 1,1 0 0 0 50,-25" />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#915eff", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "rgb(236, 64, 122)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(253, 216, 53)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="mt-5 max-w-max rounded bg-[#915eff]"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.5 },
        }}
      >
        <motion.button
          onClick={isClicked}
          whileHover={{ x: -4, y: -4 }}
          className="rounded border-2 border-[#915eff] bg-slate-100 p-3 px-6 text-lg font-medium tracking-wider text-[#915eff] dark:bg-black"
        >
          Start...
        </motion.button>
      </motion.div>
    </div>
  );
};
