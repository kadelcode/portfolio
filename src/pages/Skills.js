import React from 'react';
import { useState } from 'react';
import skills from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
    // State to keep track of selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Extract unique categories from the skills data
    const allCategories = [...new Set(skills.map((skill) => skill.category))];

    // Function to toggle the selection of a category
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            // If the category is already selected, remove it
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            // If the category is not selected, add it
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Filter skills based on selected categories
    const filteredSkills = selectedCategories.length
      ? skills.filter((skill) => selectedCategories.includes(skill.category))
      : skills;

    return (
        <section className='py-12 bg-gray-100 dark:bg-slate-900 dark:text-gray-50 transition-colors duration-300 min-h-screen'>
            <div className='mx-5 sm:mx-8 md:mx-auto box-border'>
                <h2 className='text-3xl font-bold mb-6 text-center'>My Skills</h2>

                {/* Filter Tags Section */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {allCategories.map((category) => (
                        <button
                          key={category}
                          // Dynamic class names based on selection state
                          className={`py-1 px-3 rounded-full text-sm ${
                            selectedCategories.includes(category)
                              ? 'bg-purple-500 dark:bg-purple-400 text-white'
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                          }`}
                          onClick={() => toggleCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredSkills.map((category) => (
                    <motion.div 
                      // Animation properties for the component
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      key={category.category} 
                      className='text-purple-500 dark:text-purple-400 mb-8 md:mx-7'
                    > {/* Added margin bottom for spacing */}
                        <h3 className='text-2xl font-semibold mb-4'>{category.category}</h3> {/* Category title */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 box-border'>
                            {category.items.map((skill) => (
                                <div key={skill.name} className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow box-content'>
                                    <h4 className='text-xl text-black dark:text-white font-semibold mb-2'>{skill.name}</h4> {/* Skill name */}
                                    <div className='bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
                                        <div
                                            className="bg-purple-500 dark:bg-purple-400 rounded-full h-2"
                                            style={{ width: `${skill.level}%`}}
                                        ></div>
                                    </div>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400 italic">{/* Optional description */}
                                        {skill.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills;