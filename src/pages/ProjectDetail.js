import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { slug } = useParams();
  // Fetch project details based on slug from your data source

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-4"
    >
      <h2 className="text-3xl font-bold mb-4">Project Details: {slug}</h2>
      {/* Display project details */}
    </motion.div>
  );
};

export default ProjectDetail;