const projects = [
    // Authentication and Authorization (Backend)
    {
        slug: 'auth-backend',
        title: 'Authentication and Authorization Microservice',
        description: 'A microservice for user authentication and authorization.',
        imageUrl: '/images/projects/auth-backend.png',
        technologies: ['Express.js', 'MongoDB', 'JWT', 'Postman'],
        features: [
            'User Registration',
            'User Login',
            'Password Reset',
            'Email Verification',
            'Role-Based Access Control',
            'Token-Based Authentication',
        ],
        liveUrl: 'https://auth-service-production-d511.up.railway.app/api/v1/health',
        githubUrl: 'https://github.com/kadelcode/auth-service',
    },

    // Fitness Web Application (Frontend)
    {
        slug: 'fitness-webapp',
        title: 'Fitness Web Application',
        description: 'A modern fitness tracking web app.',
        imageUrl: '/images/projects/boomfit-db.png',
        technologies: ['Next.js', 'TailwindCSS', 'NextAuth.js', 'MongoDB'],
        features: [
            'Landing Page (Marketing + Onboarding)',
            'Authentication',
            'User Dashboard',
            'Workout Tracking',
            'Meal Tracking/Nutrition',
            'Goal Setting',
            'Community Features',
            'Settings & Profile',
        ],
        liveUrl: 'https://boomfit.vercel.app',
        githubUrl: 'https://github.com/kadelcode/fitness-app',
    },
    // Task Management App (Frontend + Backend)
    {
        slug: 'task-management-app',
        title: 'Task Management App',
        description: 'A task management web application.',
        imageUrl: '/images/projects/taskspark-db.png',
        technologies: ['Next.js', 'Express.js', 'JWT', 'MongoDB'],
        features: [
            'Landing Page (Marketing + Onboarding)',
            'Authentication',
            'User Dashboard',
            'Task Management',
            'Project Management',
        ],
        liveUrl: 'https://taskspark.vercel.app',
        githubUrl: 'https://github.com/kadelcode/task-management-frontend',
    },
    // Solar Landing Page (Frontend)
    {
        slug: 'solar-landing-page',
        title: 'Solar Power Landing Page',
        description: 'A landing page design for a solar company.',
        imageUrl: '/images/projects/sunspark_landing_page.png',
        technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
        features: [
            'Animated Splash Screen',
            'Hero Section',
            'Benefits Section',
            'How It Works Section',
            'Services Offered',
            'Testimonials Section',
            'Contact Section',
            'Responsive Design',
            'Fast & SEO-Optimized',
        ],
        liveUrl: 'https://sunspark.vercel.app',
        githubUrl: 'https://github.com/kadelcode/solar-landing-page',
    },
    {
        slug: 'ai-chat-app',
        title: 'AI Chat Application',
        description: 'A real-time ai-powered chat application.',
        imageUrl: '/images/novachat_landing_page.png',
        technologies: ['React', 'Next.js', 'TailwindCSS', 'Firebase'],
        features: [
            'Authentication (Google/Auth Providers via Firebase)',
            'Real-time Chat (Firestore)',
            'AI-generated Replies (OpenAI API)',
            'Voice-to-Text (Web Speech API)',
        ],
        liveUrl: 'https://novachatai.vercel.app',
        githubUrl: 'https://github.com/kadelcode/ai-chat-app',
    },
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
            'Animations & Interactions - Using Framer Motion for smooth animations',
            'SEO Optimized - Next.js metadata API for better rankings.',
            'Dark/Light Mode Support - Improves UX with next-themes.'
        ],
        liveUrl: 'https://litai.vercel.app/',
        githubUrl: 'https://github.com/kadelcode/saas-landing-page',
    },

    {
        slug: 'learning-platform',
        title: 'Online Learning Platform',
        description: 'An online educational platform for business owners.',
        imageUrl: '/images/edubridge_homepage.png',
        technologies: ['HTML', 'CSS', 'JS', 'AJAX', 'Django'],
        features: [
            'User-Friendly Design',
            'User Management',
            'High-Quality Educational Content',
            'Community Features',
            'Content Management System',
        ],
        liveUrl: 'https://edubridge.onrender.com',
        githubUrl: 'https://github.com/ouredubridge/edutech',
    },

    // more projects here
];

export default projects;