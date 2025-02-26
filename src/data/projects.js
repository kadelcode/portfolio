import { Description } from "@headlessui/react";

const projects = [
    {
        slug: 'project-1',
        title: 'Project 1 Title',
        description: 'A brief description of Project 1.',
        imageUrl: '/images/project-1.jpg',
        technologies: ['React', 'Tailwind CSS', 'Node.js'],
        liveUrl: 'https://project1.com',
        githubUrl: 'https://github.com/kadelcode/project1',
    },

    {
        slug: 'project-2',
        title: 'Project 2 Title',
        description: 'A brief description of Project 2.',
        technologies: ['Vue.js', 'Firebase'],
        liveUrl: 'https://project2.com',
        githubUrl: 'https://github.com/kadelcode/project2',
    },

    // more projects here
];

export default projects;