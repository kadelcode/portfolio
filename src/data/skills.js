const skills = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'C', level: 90, description: 'A general-purpose programming language that is extremely popular, simple, and flexible.' },
            { name: 'Python', level: 75, description: 'A high-level programming language that is widely used for web development, data analysis, and artificial intelligence.' },
            { name: 'JavaScript', level: 85, description: 'A high-level, dynamic, untyped, and interpreted programming language.' },
            { name: 'TypeScript', level: 85, description: 'A superset of JavaScript that adds static typing to the language.' },
            { name: 'Java', level: 50, description: 'A general-purpose programming language that is class-based and object-oriented.' },
        ],
    },
    {
        category: 'Framework/Libraries',
        items: [
            { name: 'Django', level: 95, description: 'A popular Python web framework for building web applications'},
            { name: 'Flask', level: 70, description: 'A lightweight python web framework'},
            { name: 'React', level: 95, description: 'A JavaScript library for building user interfaces'},
            { name: 'Next.js', level: 80, description: 'A React framework for server-side rendering and static site generation'},
            { name: 'Node.js', level: 80, description: 'A JavaScript runtime built on Chrome\'s V8 engine'},
            { name: 'Express.js', level: 80, description: 'A web application framework for Node.js'},
        ]
    },
    {
        category: 'Version Control',
        items: [
            { name: 'Git', level: 90, description: 'A distributed version control system for tracking changes in source code'},
            { name: 'GitHub', level: 95, description: 'A web-based platform for version control and collaboration'},
            { name: 'GitLab', level: 80, description: 'A web-based DevOps lifecycle tool that provides a Git repository manager'},
            { name: 'Bitbucket', level: 80, description: 'A web-based version control repository hosting service'},
        ]
    },
    {
        category: 'Database Management',
        items: [
            { name: 'PostgreSQL', level: 95, description: 'A powerful, open-source object-relational database system'},
            { name: 'SQLite', level: 90, description: 'A C library that provides a lightweight disk-based database'},
            { name: 'MongoDB', level: 80, description: 'A NoSQL database that uses a document-oriented data model'},
            { name: 'Redis', level: 70, description: 'An open-source, in-memory data structure store'},
            { name: 'MySQL', level: 80, description: 'A widely used open-source relational database management system'},
            { name: 'Firebase', level: 70, description: 'A platform developed by Google for creating mobile and web applications'},
        ]
    },
    {
        category: 'DevOps & Cloud',
        items: [
            { name: 'AWS', level: 60, description: 'Amazon Web Services, a subsidiary of Amazon providing on-demand cloud computing platforms'},
            { name: 'GCP', level: 40, description: 'Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure that Google uses internally'},
            { name: 'Render', level: 90, description: 'A cloud platform for hosting web applications and services'},
            { name: 'Railway', level: 90, description: 'A cloud platform for deploying and managing applications'},
            { name: 'Docker', level: 40, description: 'An open platform for developing, shipping, and running applications'},
            { name: 'Kubernetes', level: 40, description: 'An open-source system for automating the deployment, scaling, and management of containerized applications'},
            { name: 'GitHub Actions', level: 90, description: 'A CI/CD feature of GitHub that allows you to automate your workflow'},
            { name: 'Vercel', level: 90, description: 'A cloud platform for static sites and serverless functions'},
            { name: 'Netlify', level: 90, description: 'A cloud platform for hosting static websites and web applications'},
        ]
    }
]

export default skills;