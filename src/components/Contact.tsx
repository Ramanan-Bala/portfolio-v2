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
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-110 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium m-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handelChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 transition-all duration-300 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium m-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 transition-all duration-300 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium m-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 transition-all duration-300 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-[1px] focus:ring-white focus:ring-offset-2 focus:ring-offset-white-100"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
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
