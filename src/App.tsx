import { BrowserRouter } from "react-router-dom";
import {
  About,
  Blogs,
  Contact,
  Experience,
  Hero,
  InitialLoader,
  Navbar,
  PixelLoader,
  Social,
} from "./components";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import "./stars.css";
import { SmoothScroll } from "./hoc";
import { debounce } from "./utils/functions";
import { AnimatePresence } from "framer-motion";
import { Mask } from "./Mask";

export const App = () => {
  const theme = localStorage.getItem("theme");

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (theme === null) {
      document.documentElement.classList.remove("dark");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }

    let id = window.location.hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo(0, element.parentElement.offsetTop - 30);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2800);

    debounce(
      window.addEventListener("hashchange", (e) => {
        let id = e.newURL.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo(0, element.parentElement.offsetTop - 30);
        }
      }),
    );
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <>
            <div className="absolute z-[-2]">
              <PixelLoader />
            </div>
            <InitialLoader />
          </>
        )}
      </AnimatePresence>
      <BrowserRouter>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="fixed top-0 z-10 w-full">
              <Navbar />
            </div>
            <Social />
            <SmoothScroll>
              <Hero />
              <div className="overflow-hidden bg-slate-100 transition-all duration-300 dark:bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat py-12">
                  <About />
                </div>
                <Experience />
                <Blogs />
              </div>
              <div className="overflow-hidden">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <Contact />
              </div>
              <Mask />
            </SmoothScroll>
          </motion.div>
        )}
      </BrowserRouter>
    </>
  );
};
