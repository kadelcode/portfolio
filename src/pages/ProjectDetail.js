import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
  // Fetch project details based on slug from your data source
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen py-12 bg-gray-100 dark:bg-gray-800'
      >
        <div className='container mx-auto'>
          <p>Project not found.</p>
          <Link to="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </motion.div>
    )
  }

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