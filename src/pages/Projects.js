import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Get unique categories from projects data
  const allCategories = [...new Set(projects.map((project) => project.category))];

  // Function to toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category)); // Remove category if already selected
    } else {
      setSelectedCategories([...selectedCategories, category]); // Add category if not selected
    }
  }

  // Filter projects based on selected categories
  const filteredProjects = selectedCategories.length
    ? projects.filter((project) => selectedCategories.includes(project.category))
    : projects; // If no categories are selected, show all projects

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 bg-gray-100 dark:bg-slate-900"
    >
      <div className='mx-8 text-black dark:text-white'>
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out
                ${
                  selectedCategories.includes(category)
                    ? 'bg-purple-500 dark:bg-purple-400 text-white' // Active category style
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
          {selectedCategories.length > 0 && (
            <button
              className='py-2 px-4 rounded-full text-sm bg-red-500 text-white hover:bg-red-600 transition-colors duration-200'
              onClick={() => setSelectedCategories([])}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                  shadow-md rounded-lg h-full
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
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center col-span-3">
              No projects found.
            </p>
          )}
        </div>
        </div>
    </motion.div>
  );
};

export default Projects;