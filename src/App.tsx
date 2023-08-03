import { BrowserRouter } from "react-router-dom";
import {
  About,
  Cursor,
  // Contact,
  Experience,
  // Feedbacks,
  Hero,
  InitialLoader,
  Navbar,
  Social,
  Tech,
  // Works,
  // Stars,
} from "./components";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
  });
  return (
    <>
      {isLoading ? (
        <InitialLoader />
      ) : (
        <BrowserRouter>
          <motion.div
            className="relative z-0 bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute z-20 pointer-events-none">
              <Cursor />
            </div>
            <Social />
            <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            {/* <Works />
        <Feedbacks /> */}
            {/* <div className="relative z-0">
          <Contact />
          <Stars />
        </div> */}
          </motion.div>
        </BrowserRouter>
      )}
    </>
  );
};
