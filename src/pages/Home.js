import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen h-full flex items-center justify-center p-4 relative"
    >
      <div
      className='absolute inset-0 z-0 mb-0'
      style={{
        backgroundImage: `url('/images/kadel.jpg')`,
        backgroundSize: 'cover',
      }}
      ></div>
      <div className="text-center z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">I'm a passionate developer...</p>
      </div>
    </motion.div>
  );
};

export default Home;