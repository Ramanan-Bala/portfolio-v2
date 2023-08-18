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
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.5)}
        className="flex-[0.75] rounded-2xl bg-slate-300/60 p-8 dark:bg-black-100"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact<span className="dot">.</span>
        </h3>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-110 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="m-4 font-medium text-slate-800 dark:text-white-100">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="What's your name?"
              className="rounded-lg border-none bg-slate-100 px-6 py-4 font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-secondary focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100 dark:bg-tertiary dark:text-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="m-4 font-medium text-slate-800 dark:text-white-100">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="What's your email?"
              className="rounded-lg border-none bg-slate-100 px-6 py-4 font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-secondary focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100 dark:bg-tertiary dark:text-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="m-4 font-medium text-slate-800 dark:text-white-100">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="What do you want to say?"
              className="rounded-lg border-none bg-slate-100 px-6 py-4 font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-secondary focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100 dark:bg-tertiary dark:text-white-100"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-slate-100 px-8 py-3 font-bold text-slate-500 shadow-md shadow-slate-500 outline-none dark:bg-tertiary dark:text-white-100 dark:shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.5)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export const Contact = SectionWrapper(ContactSection, "contact");
