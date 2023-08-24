import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  InitialLoader,
  Navbar,
  Social,
} from "./components";
import { useEffect, useState } from "react";

// import { pressHand, pressText } from "./assets";
import "./stars.css";
import { SmoothScroll } from "./hoc";
import { debounce } from "./utils/debounce";
import { Mask } from "./Mask";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const theme = localStorage.getItem("theme");

  const [isLoading, setLoading] = useState(true);
  const [isFull, setFull] = useState(false);

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
    }, 2500);

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
      {/* <div className="fixed bottom-0 left-1/2 z-50 flex h-[120px] w-full -translate-x-1/2 bg-gradient-to-t from-tertiary via-tertiary to-transparent sm:hidden">
        <button onClick={() => setFull(!isFull)} className="w-full">
          <img
            src={pressHand}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={pressText}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </div> */}
      <AnimatePresence mode="wait">
        {isLoading && <InitialLoader />}
      </AnimatePresence>
      <BrowserRouter>
        {!isLoading && (
          <>
            <div className="fixed top-0 z-10 w-full">
              <Navbar />
            </div>
            <Social />
            <SmoothScroll>
              <div className="card z-[-1] ">
                <Hero />
              </div>
              <div className="overflow-hidden bg-slate-100 transition-all duration-300 dark:bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat py-12">
                  <About />
                </div>
                <Experience />
                <div className=" overflow-hidden">
                  <div id="stars"></div>
                  <div id="stars2"></div>
                  <div id="stars3"></div>
                  <Contact />
                </div>
              </div>
              <Mask isFull={isFull} />
            </SmoothScroll>
          </>
        )}
      </BrowserRouter>
    </>
  );
};
