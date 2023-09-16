import { useEffect, useState } from "react";
import { Reveal, SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=ramanan_kb")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Reveal>
        <p className={styles.sectionSubText}>My writings</p>
      </Reveal>
      <Reveal>
        <h2 className={styles.sectionHeadText}>
          Blogs<span className="dot">.</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {!isLoading &&
          blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog} />;
          })}
      </div>
      <h3 className="mt-10 text-lg text-secondary">More blogs soon...</h3>
    </div>
  );
};

export const Blogs = SectionWrapper(BlogsSection, "blog");

const Blog = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative flex flex-col gap-9 rounded-md bg-tertiary p-8"
    >
      <motion.a
        whileHover={{ scale: 1.5, y: -3, x: 3 }}
        href={blog.canonical_url}
        target="_blank"
        rel="noreferrer"
        className="absolute right-5 top-5"
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
        </svg>
      </motion.a>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold text-white">{blog.title}</h1>
        <h3 className="text-base text-white">{blog.description}</h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-4 text-secondary">
          {blog.tag_list.map((tag) => {
            return <span key={tag}>#{tag}</span>;
          })}
        </div>
        <div className="flex gap-8 text-white">
          <div className="flex cursor-pointer items-center gap-2 rounded-lg px-1.5 py-0.5 hover:bg-[#392e71]">
            <span className="relative min-h-[30px] min-w-[50px]">
              <span className="absolute top-0 z-20 flex items-center justify-center rounded-3xl border-2 border-tertiary bg-secondary p-1">
                <img
                  src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                  width="16"
                  height="16"
                />
              </span>
              <span className="absolute left-5 z-10 flex items-center justify-center rounded-3xl border-2 border-tertiary bg-secondary p-1">
                <img
                  src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                  width="16"
                  height="16"
                />
              </span>
            </span>
            <span>
              {blog.public_reactions_count}
              <span className="hidden sm:inline">&nbsp;reactions</span>
            </span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-lg px-1.5 py-0.5 hover:bg-[#392e71]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-white"
            >
              <title id="arsxpgdcg9u40fh1db4y151855dzgzau">Comments</title>
              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
            </svg>
            <span className="flex">
              {blog.comments_count}
              <span className="hidden sm:inline">&nbsp;comments</span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm font-thin text-white">
          <span className="tracking-widest">
            {new Date(blog.published_at).toLocaleDateString("en-GB")}
          </span>
          <span className="italic">{blog.reading_time_minutes} min read</span>
        </div>
      </div>
    </motion.div>
  );
};
