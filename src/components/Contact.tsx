import { useState, useRef } from "react";
import { motion } from "framer-motion";

// import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Earth } from ".";

const ContactSection = () => {
  const formRef = useRef();

  const [form] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading] = useState(false);

  const handelChange = () => {};

  const handelSubmit = () => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.5)}
        className="flex-[0.75] dark:bg-black-100 bg-slate-300/60 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-110 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="dark:text-white-100 text-slate-800 font-medium m-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="What's your name?"
              className="dark:bg-tertiary bg-slate-100 py-4 px-6 transition-all duration-300 placeholder:text-secondary dark:text-white-100 text-slate-800 rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="dark:text-white-100 text-slate-800 font-medium m-4">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="What's your email?"
              className="dark:bg-tertiary bg-slate-100 py-4 px-6 transition-all duration-300 placeholder:text-secondary dark:text-white-100 text-slate-800 rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="dark:text-white-100 text-slate-800 font-medium m-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="What do you want to say?"
              className="dark:bg-tertiary bg-slate-100 py-4 px-6 transition-all duration-300 placeholder:text-secondary dark:text-white-100 text-slate-800 rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>

          <button
            type="submit"
            className="dark:bg-tertiary bg-slate-100 py-3 px-8 outline-none w-fit dark:text-white-100 text-slate-500 font-bold shadow-md dark:shadow-primary shadow-slate-500 rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.5)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export const Contact = SectionWrapper(ContactSection, "contact");
