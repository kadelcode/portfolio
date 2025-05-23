import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypingEffect from '../components/TypingEffect';
import TechStackMarquee from '../components/TechStackMarquee';

const Home = () => {

  const [darkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=
      "min-h-screen w-full flex flex-col items-center overflow-x-hidden justify-center relative transition-colors duration-300"
    >
      <div
      className="absolute max-h-full inset-0 z-0 mb-0 bg-cover bg-light-mode opacity-20 dark:bg-dark-mode dark:opacity-40"
      style={{
        backgroundSize: 'cover',
      }}
      ></div>
      <div className="text-center z-10 text-white mx-auto">
        <h1 className="text-5xl md:text-7xl font-quicksand text-purple-500  dark:text-purple-400 font-bold mb-4 mx-4"><TypingEffect /></h1><br />
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="text-md px-4 text-justify font-montserrat md:text-2xl mt-5 mb-20 transition-colors duration-300 text-black dark:text-white"
        >
          I'm a passionate full stack software engineer who thrives on turning innovative ideas
          into robust, efficient, and elegant solutions. I love building scalable,
          user-friendly applications that solve real-world problems.
        </motion.p>

      </div>
      <TechStackMarquee />
    </motion.div>
  );
};

export default Home;