import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: 'path/to/image1.jpg', slug: 'project-1' },
    { id: 2, title: 'Project 2', image: 'path/to/image2.jpg', slug: 'project-2' },
    // ... more projects
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-4"
    >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`}>
            <div className="border rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;