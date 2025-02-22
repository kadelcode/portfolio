import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4 relative"
    >
      <div
      className='absolute max-h-full inset-0 z-0 mb-0 bg-cover'
      style={{
        backgroundImage: `url('/images/kadel.jpg')`,
        backgroundSize: 'cover',
      }}
      ></div>
      <div className="text-center z-10 text-white md:ml-7 md:mr-7">
        <h1 className="text-5xl md:text-7xl font-quicksand text-purple-600 dark:text-purple-400 font-bold mb-4"><TypingEffect /></h1><br />
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="text-md text-justify font-poppins md:text-2xl mt-5 transition-colors duration-300"
        >
          I'm a passionate full stack software engineer who thrives on turning innovative ideas
          into robust, efficient, and elegant solutions. I love building scalable,
          user-friendly applications that solve real-world problems.
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Home;