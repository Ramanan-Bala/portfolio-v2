import { BrowserRouter } from "react-router-dom";
import {
  About,
  // Cursor,
  Contact,
  Experience,
  Hero,
  InitialLoader,
  Navbar,
  Social,
} from "./components";
import { useEffect, useState } from "react";

import "./stars.css";
import { SmoothScroll } from "./hoc";
import { debounce } from "./utils/debounce";
import { Mask } from "./Mask";

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

    let id = window.location.hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo(0, element.parentElement.offsetTop - 30);
    }

    debounce(
      window.addEventListener("hashchange", (e) => {
        let id = e.newURL.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo(0, element.parentElement.offsetTop - 30);
        }
      })
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
      {/* <div className="absolute pointer-events-none hidden sm:flex">
        <Cursor />
      </div> */}
      {isLoading ? (
        <InitialLoader isClicked={isClicked} />
      ) : (
        <BrowserRouter>
          <div className="fixed top-0 w-full z-10">
            <Navbar />
          </div>
          <Social />
          <SmoothScroll>
            {/* <div className="card z-[-1] "> */}
            <Hero />
            {/* </div> */}
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
              </div>
            </div>
            <Mask />
          </SmoothScroll>
        </BrowserRouter>
      )}
    </>
  );
};
