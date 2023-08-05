import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { motion } from "framer-motion";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14" />
          <p className="dark:text-white text-slate-800 text-[18px] flex font-bold cursor-pointer">
            Ramanan &nbsp;
            <span className="md:block hidden">| Full-Stack Developer</span>
          </p>
        </Link>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="flex items-center gap-10">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "dark:text-white text-slate-800"
                      : "dark:text-secondary text-slate-500"
                  } dark:hover:text-white hover:text-slate-800 transition-all duration-300 cursor-pointer font-medium text-[18px]`}
                  onClick={() => setActive(link.id)}
                >
                  <a href={`#${link.id}`}>
                    {index + 1}.&nbsp;&nbsp;{link.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="theme-toggle--button"
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
          </div>
          <div className="sm:hidden flex justify-end items-center">
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer filter dark:invert-0 invert"
              onClick={() => setToggle(!toggle)}
            />
            {/* {toggle && ( */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: toggle ? 0 : 500,
                backdropFilter: "blur(10px)",
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col p-2 dark:bg-black bg-white absolute right-0 top-0 h-screen w-[calc(100vw-5vw)] z-10 rounded-l-xl"
            >
              <div className="flex items-center">
                <h1 className={`${styles.heroHeadText} text-center w-full`}>
                  Menu.
                </h1>
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain cursor-pointer filter dark:invert-0 invert"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <div className="flex w-full h-full justify-center items-center">
                <ul className="list-none flex flex-col gap-16">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.id
                          ? "dark:text-white text-slate-800"
                          : "dark:text-secondary text-slate-500"
                      } font-poppins font-semibold cursor-pointer text-5xl`}
                      onClick={() => {
                        setActive(link.id);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link.id}`}>
                        {index + 1}. {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            {/* )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};
