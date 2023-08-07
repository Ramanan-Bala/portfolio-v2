import { motion } from "framer-motion";
import "./Loader.css";

export const InitialLoader = ({ isClicked }) => {
  return (
    <div className="loader flex flex-col items-center justify-center h-screen dark:bg-primary bg-slate-100 transition-all duration-300">
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
        className="bg-[#915eff] max-w-max mt-5 rounded"
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
          className="border-2 dark:bg-black bg-slate-100 border-[#915eff] p-3 px-6 text-lg font-medium tracking-wider rounded text-[#915eff]"
        >
          Start...
        </motion.button>
      </motion.div>
    </div>
  );
};
