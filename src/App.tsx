import { BrowserRouter } from "react-router-dom";
import {
  About,
  Cursor,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  InitialLoader,
  Navbar,
  Social,
  // Tech,
  // Works,
  // Stars,
  // Blob,
} from "./components";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import "./stars.css";
import { SmoothScroll } from "./hoc";

export const App = () => {
  const theme = localStorage.getItem("theme");

  const [isLoading, setLoading] = useState(true);

  const isClicked = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (theme === null) {
      document.documentElement.classList.remove("dark");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.hash.substring(1);

    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [isLoading]);

  return (
    <>
      <div className="absolute pointer-events-none hidden sm:flex">
        <Cursor />
        {/* <Blob /> */}
      </div>
      {isLoading ? (
        <InitialLoader isClicked={isClicked} />
      ) : (
        <BrowserRouter>
          <SmoothScroll>
            <motion.div
              className="relative z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Social />
              <div className="fixed top-0 w-full z-10">
                <Navbar />
              </div>
              <div className="card z-[-1] ">
                <Hero />
              </div>
              <div className="dark:bg-primary bg-slate-100 transition-all duration-300 overflow-hidden">
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat py-12">
                  <About />
                </div>
                <Experience />
                <div className=" overflow-hidden">
                  <div id="stars"></div>
                  <div id="stars2"></div>
                  <div id="stars3"></div>
                  <Contact />
                  {/* <Stars /> */}
                </div>
              </div>
            </motion.div>
          </SmoothScroll>
        </BrowserRouter>
      )}
    </>
  );
};
