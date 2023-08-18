import { motion } from "framer-motion";

import { styles } from "./styles";
import { useMousePosition } from "./utils/useMousePosition";
import { useState } from "react";
import { MagneticEffect } from "./hoc";

export const Mask = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.div
      className="w-full mx-auto mask md:block hidden"
      animate={{
        // WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskPositionX: `${x - size / 2}px`,
        WebkitMaskPositionY: `${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      <div className="h-screen relative">
        <div
          className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex flex-col lg:gap-[200px] gap-[100px] items-start`}
        >
          <div className="flex flex-col lg:flex-row lg:gap-[120px] gap-[100px] justify-between lg:items-end">
            <div className="flex flex-col lg:gap-[120px] gap-[50px]">
              <h1
                className={`${styles.heroHeadText} relative max-w-min pb-5 before:absolute before:bottom-0 before:h-3 before:w-36 before:bg-[#915eff] text-dark`}
              >
                Ramanan Balamurugan
                <span className="dot">.</span>
              </h1>
              <div className="flex gap-x-[80px] hero-social">
                <MagneticEffect>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M11.25 23.75C5 25.625 5 20.625 2.5 20M20 27.5V22.6625C20.0469 22.0665 19.9664 21.4673 19.7638 20.9047C19.5612 20.3422 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.90478 26.2034 7.2265 25 5.9625C25.5698 4.43563 25.5295 2.74794 24.8875 1.25C24.8875 1.25 23.4125 0.812498 20 3.1C17.135 2.32353 14.115 2.32353 11.25 3.1C7.8375 0.812498 6.3625 1.25 6.3625 1.25C5.72047 2.74794 5.68018 4.43563 6.25 5.9625C5.03766 7.23587 4.36565 8.92933 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8625 11.6966 20.3693 11.4941 20.9249C11.2917 21.4805 11.2085 22.0726 11.25 22.6625V27.5"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>

                <MagneticEffect>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M19.9999 9.99998C21.989 9.99998 23.8967 10.7902 25.3032 12.1967C26.7097 13.6032 27.4999 15.5109 27.4999 17.5V26.25H22.4999V17.5C22.4999 16.8369 22.2365 16.2011 21.7676 15.7322C21.2988 15.2634 20.6629 15 19.9999 15C19.3368 15 18.701 15.2634 18.2321 15.7322C17.7633 16.2011 17.4999 16.8369 17.4999 17.5V26.25H12.4999V17.5C12.4999 15.5109 13.2901 13.6032 14.6966 12.1967C16.1031 10.7902 18.0108 9.99998 19.9999 9.99998Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 11.25H2.5V26.25H7.5V11.25Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 7.49998C6.38071 7.49998 7.5 6.38069 7.5 4.99998C7.5 3.61927 6.38071 2.49998 5 2.49998C3.61929 2.49998 2.5 3.61927 2.5 4.99998C2.5 6.38069 3.61929 7.49998 5 7.49998Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>
                <MagneticEffect>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M14.5 9.075V24.325H5.67505V5.675H24.3251V24.325H21.425V9.825C21.425 9.81359 21.4252 9.79868 21.4254 9.7811C21.4262 9.71016 21.4276 9.59563 21.4201 9.49144C21.4117 9.37385 21.388 9.15654 21.2649 8.97142L21.264 8.97008C21.109 8.7386 20.8533 8.65826 20.7141 8.62434C20.5483 8.58393 20.3661 8.56888 20.2056 8.56322C20.0412 8.55741 19.8761 8.56088 19.7385 8.56531C19.687 8.56697 19.6417 8.56864 19.6017 8.57011C19.5261 8.5729 19.4693 8.575 19.425 8.575H15H14.5V9.075Z"
                        stroke="#F2F2F2"
                      />
                    </svg>
                  </a>
                </MagneticEffect>
                <MagneticEffect>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M21.25 2.5H8.75C5.29822 2.5 2.5 5.29822 2.5 8.75V21.25C2.5 24.7018 5.29822 27.5 8.75 27.5H21.25C24.7018 27.5 27.5 24.7018 27.5 21.25V8.75C27.5 5.29822 24.7018 2.5 21.25 2.5Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 14.2125C20.1543 15.2528 19.9766 16.3153 19.4922 17.2488C19.0078 18.1823 18.2414 18.9393 17.302 19.4121C16.3626 19.8849 15.2981 20.0495 14.2597 19.8824C13.2214 19.7153 12.2622 19.2251 11.5185 18.4815C10.7749 17.7378 10.2847 16.7786 10.1176 15.7403C9.9505 14.7019 10.1151 13.6374 10.5879 12.698C11.0607 11.7586 11.8177 10.9922 12.7512 10.5078C13.6847 10.0234 14.7472 9.84573 15.7875 10C16.8487 10.1574 17.8311 10.6518 18.5896 11.4104C19.3482 12.1689 19.8426 13.1513 20 14.2125Z"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.875 8.125H21.8875"
                        stroke="#F2F2F2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </MagneticEffect>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <h5 className="relative text-dark text-secondary lg:text-[20px] text-[15px] pl-5 before:absolute before:top-1/2 before:left-0 before:h-0.5 lg:before:w-4 before:w-3 dark:before:bg-black before:bg-gray">
                Introduction
              </h5>
              <h3 className="text-gray lg:text-[40px] text-[25px] font-bold mt-2 text-dark">
                UI/UX Designer <br /> and Full-Stack Developer
              </h3>
              <p
                className={`mt-2 lg:text-[20px] !text-secondary !leading-[35px] text-dark`}
              >
                Hello! My name is Ramanan and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2019 when I decided to see what my dad is doing — turns out
                hacking together a custom html components taught me a lot about
                HTML & CSS!
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:place-content-start place-content-center w-full">
            <div className="w-full flex lg:justify-normal justify-center items-center">
              <a
                href="#about"
                className="text-gray dark:text-tertiary flex items-center gap-5 font-semibold"
              >
                <div className="w-9 h-16 rounded-3xl border-4 border-gray dark:border-slate-800 flex justify-center items-start p-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-gray dark:bg-slate-800 mb-1"
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </div>
                <span className="flex items-center gap-1">
                  Scroll down
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </span>
              </a>
            </div>
            <motion.div
              className="bg-tertiary max-w-max my-5 rounded"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <motion.button
                whileHover={{ x: -4, y: -4 }}
                className="border-2 dark:bg-tertiary bg-slate-100 border-[#915eff] p-3 px-6 text-lg font-medium tracking-wider rounded text-[#915eff]"
              >
                Check out my Blogs
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-[72px] min-h-screen`}
      >
        <div>
          <p className={`${styles.sectionSubText} text-dark`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-dark`}>
            Overview<span className="text-white">.</span>
          </h2>
        </div>
        <p
          className="mt-4 text-[17px] max-w-3xl leading-7 h-[120px] text-dark"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, experienced in developing
          real-time applications, animations, and coding interactive layouts.
        </p>
      </div>
      <div
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12 min-h-screen`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <p className={`${styles.sectionSubText} text-dark`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-dark`}>
          Work Experience<span className="text-white">.</span>
        </h2>
      </div>
    </motion.div>
  );
};
