/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        green: "#08fdd8",
        gray: "#f2f2f2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.png')",
      },
      animation: {
        slideleft: "slideleft 1s ease-in-out",
        slideleftT2: "slideleft 1.2s ease-in-out",
        slideleftT3: "slideleft 1.3s ease-in-out",
        slideleftT4: "slideleft 1.6s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        sliderightT2: "slideright 1.2s ease-in-out",
        sliderightT3: "slideright 1.3s ease-in-out",
        sliderightT4: "slideright 1.6s ease-in-out",
        slidebottom: "slidebottom 1s ease-in-out",
        slidebottomT2: "slidebottom 1.2s ease-in-out",
        slidebottomT3: "slidebottom 1.3s ease-in-out",
        slidebottomT4: "slidebottom 1.6s ease-in-out",
      },
      keyframes: {
        slideleft: {
          from: { opacity: 0, transform: "translateX(500px)" },
          "75%": { transform: "translateX(-10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(-500px)" },
          "75%": { transform: "translateX(10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slidebottom: {
          from: { opacity: 0, transform: "translateY(100%)" },
          "75%": { transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
