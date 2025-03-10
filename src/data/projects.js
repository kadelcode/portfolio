const projects = [
    {
        slug: 'saas-landing-page',
        title: 'A SaaS Landing Page',
        description: 'A Software as a Service landing page design.',
        imageUrl: '/images/saas-homepage.png',
        technologies: ['React', 'Tailwind CSS', 'Next.js'],
        features: [
            'Hero Section – A compelling headline, subheadline, and CTA (e.g., "Get Started for Free")',
            'Features Section - Highlighting the key benefits of your SaaS.',
            'Pricing Section - Showing different pricing plans.',
            'Testimonials - Social proof to build credibilty.',
            'Call to Action (CTA) - Encourages users to sign up or contact you.',
            'Responsive UI - Works well on both mobile and desktop.',
            'Animations & Interactions - Using `Frame Motion` for smooth animations',
            'SEO Optimized - Next.js metadata API for better rankings.',
            'Dark/Light Mode Support - Improves UX with next-themes.'
        ],
        liveUrl: 'https://litai.vercel.app/',
        githubUrl: 'https://github.com/kadelcode/saas-landing-page',
    },

    {
        slug: 'project-2',
        title: 'Project 2 Title',
        description: 'A brief description of Project 2.',
        technologies: ['Vue.js', 'Firebase'],
        liveUrl: 'https://project2.com',
        githubUrl: 'https://github.com/kadelcode/project2',
    },

    {
        slug: 'project-3',
        title: 'Project 3 Title',
        description: 'A brief description of Project 3.',
        technologies: ['React', 'TailwindCSS', 'Django'],
        liveUrl: 'https://project3.com',
        githubUrl: 'https://github.com/kadelcode/project2',
    },

    // more projects here
];

export default projects;