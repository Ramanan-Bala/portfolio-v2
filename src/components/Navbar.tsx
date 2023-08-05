import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

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
          <div className="sm:hidden flex  justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id
                        ? "dark:text-white text-slate-800"
                        : "dark:text-secondary text-slate-500"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
