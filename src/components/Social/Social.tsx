import { useEffect, useState } from "react";
import { MagneticEffect } from "../../hoc";
import "./Social.css";

import { motion } from "framer-motion";

export const Social = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop =
        window.scrollY < document.documentElement.clientHeight * 0.5;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <div>
      <motion.div
        animate={{ opacity: 1, y: isScrolled ? 0 : 300 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="float social"
      >
        <MagneticEffect>
          <a
            href="https://www.npmjs.com/~ramanan_kb"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="npm"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 400 400"
            >
              <path
                strokeWidth="1"
                d="M69 69c262 0 0 0 0 0v262h131V121h59c4.17 0 16.63-1.2 18.98 2.31 1.23 1.85 1.02 5.5 1.02 7.69v200h52V69Z"
              ></path>
            </svg>
          </a>
        </MagneticEffect>
        <MagneticEffect>
          <a
            href="https://github.com/Ramanan-Bala?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25002 11.0833C2.33335 11.9583 2.33335 9.62501 1.16669 9.33335M9.33335 12.8333V10.5758C9.35524 10.2977 9.31766 10.0181 9.22311 9.75556C9.12857 9.49305 8.97923 9.25368 8.78502 9.05335C10.6167 8.84918 12.5417 8.15501 12.5417 4.97001C12.5415 4.15558 12.2283 3.37238 11.6667 2.78251C11.9326 2.06998 11.9138 1.28238 11.6142 0.583348C11.6142 0.583348 10.9259 0.379181 9.33335 1.44668C7.99636 1.08433 6.58701 1.08433 5.25002 1.44668C3.65752 0.379181 2.96919 0.583348 2.96919 0.583348C2.66957 1.28238 2.65077 2.06998 2.91669 2.78251C2.35093 3.37676 2.03733 4.16703 2.04169 4.98751C2.04169 8.14918 3.96669 8.84335 5.79835 9.07085C5.60644 9.26916 5.45842 9.50567 5.36395 9.76497C5.26948 10.0243 5.23066 10.3006 5.25002 10.5758V12.8333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </MagneticEffect>
        <MagneticEffect>
          <a
            href="https://www.linkedin.com/in/ramanan-balamurugan-0b4020241/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33331 4.66666C10.2616 4.66666 11.1518 5.03541 11.8082 5.69178C12.4646 6.34816 12.8333 7.2384 12.8333 8.16666V12.25H10.5V8.16666C10.5 7.85724 10.3771 7.56049 10.1583 7.3417C9.93948 7.12291 9.64273 6.99999 9.33331 6.99999C9.02389 6.99999 8.72715 7.12291 8.50836 7.3417C8.28956 7.56049 8.16665 7.85724 8.16665 8.16666V12.25H5.83331V8.16666C5.83331 7.2384 6.20206 6.34816 6.85844 5.69178C7.51482 5.03541 8.40506 4.66666 9.33331 4.66666Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.50002 5.25H1.16669V12.25H3.50002V5.25Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.33335 3.49999C2.97769 3.49999 3.50002 2.97766 3.50002 2.33332C3.50002 1.68899 2.97769 1.16666 2.33335 1.16666C1.68902 1.16666 1.16669 1.68899 1.16669 2.33332C1.16669 2.97766 1.68902 3.49999 2.33335 3.49999Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </MagneticEffect>
        <MagneticEffect>
          <a
            href="https://www.instagram.com/ramanan_kb/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.91669 1.16666H4.08335C2.47252 1.16666 1.16669 2.47249 1.16669 4.08332V9.91666C1.16669 11.5275 2.47252 12.8333 4.08335 12.8333H9.91669C11.5275 12.8333 12.8334 11.5275 12.8334 9.91666V4.08332C12.8334 2.47249 11.5275 1.16666 9.91669 1.16666Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33333 6.63249C9.40532 7.11797 9.32239 7.61379 9.09635 8.04942C8.87031 8.48505 8.51266 8.83832 8.07427 9.05897C7.63589 9.27962 7.13909 9.35642 6.65453 9.27845C6.16998 9.20048 5.72235 8.97171 5.37531 8.62467C5.02828 8.27763 4.7995 7.83 4.72153 7.34545C4.64356 6.8609 4.72036 6.3641 4.94102 5.92571C5.16167 5.48732 5.51493 5.12967 5.95057 4.90363C6.3862 4.67759 6.88202 4.59467 7.36749 4.66666C7.8627 4.74009 8.32115 4.97085 8.67515 5.32484C9.02914 5.67883 9.25989 6.13729 9.33333 6.63249Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2083 3.79166H10.2141"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </MagneticEffect>
        <div className="line"></div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: isScrolled ? 0 : 300 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="float mail"
      >
        <a href="mailto:ramanan.bala2003@gmail.com">
          <span>ramanan.bala2003@gmail.com</span>
        </a>
        <div className="line"></div>
      </motion.div>
    </div>
  );
};
