import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'C', level: 90 },
                { name: 'Python', level: 75 },
                { name: 'JavaScript', level: 85},
                { name: 'Java', level: 50}
            ],
        },
        {
            category: 'Framework/Libraries',
            items: [
                { name: 'Django', level: 95},
                { name: 'Flask', level: 70},
                { name: 'React', level: 95},
                { name: 'Node.js', level: 80},
                { name: 'Express.js', level: 80},
            ]
        },
        {
            category: 'Version Control',
            items: [
                { name: 'Git', level: 90},
                { name: 'GitHub', level: 90},
            ]
        }
    ]

    return (
        <section className='py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 min-h-screen'>
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