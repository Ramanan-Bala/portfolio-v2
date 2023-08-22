import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { MagneticEffect } from "../hoc";

import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "../utils/motion";
import { Curve, NavLink } from ".";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState(active);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const changeTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (theme === "dark" || theme === null) {
      setTheme("dark");
    }
    const sections = document.querySelectorAll("section");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200)
          current = section.firstElementChild.id;
      });
      setActive(current);
    };
  });

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 backdrop-blur-md`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <MagneticEffect>
            <img src={logo} alt="logo" className="h-14 w-14" />
          </MagneticEffect>
          <p className="flex cursor-pointer text-[18px] font-bold text-slate-800 dark:text-white">
            Ramanan &nbsp;
            <span className="hidden md:block">| Full-Stack Developer</span>
          </p>
        </Link>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="flex items-center gap-10">
            <ul className="hidden list-none flex-row gap-10 sm:flex">
              {navLinks.map((link, index) => (
                <a
                  href={`#${link.href}`}
                  key={link.href}
                  className={`${
                    active === link.href
                      ? "text-slate-800 dark:text-white"
                      : "text-slate-500 dark:text-secondary"
                  } relative cursor-pointer text-[18px] font-medium transition-all duration-300 hover:text-slate-800 dark:hover:text-white`}
                  onClick={() => {
                    setActive(link.href);
                  }}
                >
                  <AnimatedLink title={`${index + 1}.  ${link.title}`} />
                </a>
              ))}
            </ul>
            <MagneticEffect>
              <button
                className="theme-toggle--button z-10"
                aria-label="Toggle Theme"
                onClick={changeTheme}
              >
                <span
                  className={`shape ${theme === "dark" ? "sun" : "moon"}`}
                ></span>
                <span className="rays--container">
                  <span className="ray"></span>
                  <span className="ray"></span>
                  <span className="ray"></span>
                  <span className="ray"></span>
                </span>
              </button>
            </MagneticEffect>
          </div>
          <div className="flex items-center justify-end sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`${
                !toggle && "invert"
              } z-10 h-[28px] w-[28px] cursor-pointer object-contain filter dark:invert-0`}
              onClick={() => setToggle(!toggle)}
            />
            <AnimatePresence mode="wait">
              {toggle && (
                <motion.div
                  variants={menuSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="menu"
                >
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-2/3 flex-col gap-10">
                    <h1 className="mt-5 border-b border-white text-xl !text-white">
                      Menu.
                    </h1>
                    <div className="flex flex-col gap-10">
                      {navLinks.map((data, index) => (
                        <NavLink
                          key={index}
                          data={{ ...data, index }}
                          isActive={selectedIndicator == data.href}
                          setSelectedIndicator={setSelectedIndicator}
                        />
                      ))}
                    </div>
                  </div>
                  <Curve />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

const AnimatedLink = ({ title }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer overflow-hidden"
    >
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          animation={letterAnimation2}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.015,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimation2 = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedWord = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="relative whitespace-nowrap"
    >
      {title.split("").map((letter, index) =>
        letter === " " ? (
          <span key={index}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            className="relative inline-block whitespace-nowrap"
            key={index}
          >
            {letter}
          </motion.span>
        ),
      )}
    </motion.span>
  );
};
