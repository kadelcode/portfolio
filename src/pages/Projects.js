import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 bg-gray-100 dark:bg-slate-900"
    >
      <div className='mx-8 text-black dark:text-white'>
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className='block'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white
                dark:bg-gray-950
                shadow-md rounded-lg
                overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        </div>
    </motion.div>
  );
};

export default Projects;