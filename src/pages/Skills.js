import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'C', level: 90, description: '' },
                { name: 'Python', level: 75, description: '' },
                { name: 'JavaScript', level: 85, description: ''},
                { name: 'Java', level: 50, description: ''}
            ],
        },
        {
            category: 'Framework/Libraries',
            items: [
                { name: 'Django', level: 95, description: 'A python framework'},
                { name: 'Flask', level: 70, description: ''},
                { name: 'React', level: 95, description: ''},
                { name: 'Node.js', level: 80, description: ''},
                { name: 'Express.js', level: 80, description: ''},
            ]
        },
        {
            category: 'Version Control',
            items: [
                { name: 'Git', level: 90, description: ''},
                { name: 'GitHub', level: 95, description: ''},
                { name: 'GitLab', level: 80, description: ''},
            ]
        },
        {
            category: 'Database Management',
            items: [
                { name: 'PostgreSQL', level: 95, description: ''},
                { name: 'MongoDB', level: 80, description: ''},
                { name: 'MySQL', level: 80, description: ''},
            ]
        },
        {
            category: 'DevOps & Cloud',
            items: [
                { name: 'AWS', level: 60, description: ''},
                { name: 'GCP', level: 40, description: ''},
                { name: 'Render', level: 90, description: ''},
                { name: 'Docker', level: 40, description: ''},
                { name: 'Kubernetes', level: 40, description: ''},
                { name: 'GitHub Actions', level: 90, description: ''},
            ]
        }
    ]

    return (
        <section className='py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 transition-colors duration-300 min-h-screen'>
            <div className='mx-5 sm:mx-8 md:mx-auto box-border'>
                <h2 className='text-3xl font-bold mb-6 text-center'>My Skills</h2>

                {skills.map((category) => (
                    <div key={category.category} className='text-purple-500 dark:text-purple-400 mb-8 md:mx-7'> {/* Added margin bottom for spacing */}
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
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;