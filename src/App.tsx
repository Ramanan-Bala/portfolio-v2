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
  Blob,
} from "./components";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import "./stars.css";

export const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
    // Get the ID from the URL
    const url = new URL(window.location.href);
    const id = url.hash.substring(1); // Remove the "#" symbol from the ID

    // Scroll to the element with the ID
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
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
            <div className="absolute pointer-events-none hidden sm:flex">
              <Cursor />
              <Blob />
            </div>
            <Social />
            <div className="fixed top-0 w-full z-10">
              <Navbar />
            </div>
            <div className="card z-[-1] ">
              <Hero />
            </div>
            <div className="bg-primary">
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
        </BrowserRouter>
      )}
    </>
  );
};
