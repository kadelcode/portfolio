import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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
        className='min-h-screen py-12 bg-gray-100 dark:bg-gray-800 text-2xl dark:text-white flex items-center justify-center'
      >
        <div className='mx-auto'>
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
      className="min-h-screen py-12 bg-gray-100 dark:bg-gray-800"
    >
      <div className='container mx-auto'>
        <h2 className="text-3xl font-bold mb-4 text-dark dark:text-white">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className='w-full rounded-lg mb-6' />
        <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4'>
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4'>
            Github
          </a>
        )}
        {/* Key features of the project */}
        {project.features &&
        <div className='mt-5 dark:text-white'>
          <h2 className='text-2xl font-bold mb-5'>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li className='mb-6 flex items-center gap-2' key={index}>
                <CheckCircleIcon width={30} height={30} className='text-purple-500' />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        }
        <Link to="/projects" className="block mt-6 text-blue-500 hover:underline">
          Back to Projects
        </Link>
      </div>
      {/* Display project details */}
    </motion.div>
  );
};

export default ProjectDetail;