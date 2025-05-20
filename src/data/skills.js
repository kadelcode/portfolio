const skills = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'C', level: 90, description: 'A general-purpose programming language that is extremely popular, simple, and flexible.', icon: '/images/tech-icons/c-color.svg' },
            { name: 'Python', level: 75, description: 'A high-level programming language that is widely used for web development, data analysis, and artificial intelligence.', icon: '/images/tech-icons/python-color.svg' },
            { name: 'JavaScript', level: 85, description: 'A high-level, dynamic, untyped, and interpreted programming language.', icon: '/images/tech-icons/javascript-color.svg' },
            { name: 'TypeScript', level: 85, description: 'A superset of JavaScript that adds static typing to the language.', icon: '/images/tech-icons/typescript-color.svg' },
            //{ name: 'Java', level: 50, description: 'A general-purpose programming language that is class-based and object-oriented.', icon: '' },
        ],
    },
    {
        category: 'Framework/Libraries',
        items: [
            { name: 'Django', level: 95, description: 'A popular Python web framework for building web applications', icon: '/images/tech-icons/django-color.svg'},
            { name: 'Flask', level: 70, description: 'A lightweight python web framework', icon: '/images/tech-icons/flask-color.svg'},
            { name: 'React', level: 95, description: 'A JavaScript library for building user interfaces', icon: '/images/tech-icons/react-color.svg'},
            { name: 'Next.js', level: 80, description: 'A React framework for server-side rendering and static site generation', icon: '/images/tech-icons/nextdotjs-color.svg'},
            { name: 'Node.js', level: 80, description: 'A JavaScript runtime built on Chrome\'s V8 engine', icon: '/images/tech-icons/nodedotjs-color.svg'},
            { name: 'Express.js', level: 80, description: 'A web application framework for Node.js', icon: '/images/tech-icons/express-color.svg'},
        ]
    },
    {
        category: 'Version Control',
        items: [
            { name: 'Git', level: 90, description: 'A distributed version control system for tracking changes in source code', icon: '/images/tech-icons/git-color.svg'},
            { name: 'GitHub', level: 95, description: 'A web-based platform for version control and collaboration', icon: '/images/tech-icons/github-color.svg'},
            { name: 'GitLab', level: 80, description: 'A web-based DevOps lifecycle tool that provides a Git repository manager', icon: '/images/tech-icons/gitlab-color.svg'},
            { name: 'Bitbucket', level: 80, description: 'A web-based version control repository hosting service', icon: '/images/tech-icons/bitbucket-color.svg'},
        ]
    },
    {
        category: 'Database Management',
        items: [
            { name: 'PostgreSQL', level: 95, description: 'A powerful, open-source object-relational database system', icon: '/images/tech-icons/postgresql-color.svg'},
            { name: 'SQLite', level: 90, description: 'A C library that provides a lightweight disk-based database', icon: '/images/tech-icons/sqlite-color.svg'},
            { name: 'MongoDB', level: 80, description: 'A NoSQL database that uses a document-oriented data model', icon: '/images/tech-icons/mongodb-color.svg'},
            { name: 'Redis', level: 70, description: 'An open-source, in-memory data structure store', icon: '/images/tech-icons/redis-color.svg'},
            { name: 'MySQL', level: 80, description: 'A widely used open-source relational database management system', icon: '/images/tech-icons/mysql-color.svg'},
            { name: 'Firebase', level: 70, description: 'A platform developed by Google for creating mobile and web applications', icon: '/images/tech-icons/firebase-color.svg'},
        ]
    },
    {
        category: 'DevOps & Cloud',
        items: [
            { name: 'AWS', level: 60, description: 'Amazon Web Services, a subsidiary of Amazon providing on-demand cloud computing platforms', icon: '/images/tech-icons/amazonwebservices-color.svg'},
            { name: 'GCP', level: 40, description: 'Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure that Google uses internally', icon: '/images/tech-icons/googlecloud-color.svg'},
            { name: 'Render', level: 90, description: 'A cloud platform for hosting web applications and services', icon: '/images/tech-icons/render-color.svg'},
            { name: 'Railway', level: 90, description: 'A cloud platform for deploying and managing applications', icon: '/images/tech-icons/railway-color.svg'},
            { name: 'Docker', level: 40, description: 'An open platform for developing, shipping, and running applications', icon: '/images/tech-icons/docker-color.svg'},
            { name: 'Kubernetes', level: 40, description: 'An open-source system for automating the deployment, scaling, and management of containerized applications', icon: '/images/tech-icons/kubernetes-color.svg'},
            { name: 'GitHub Actions', level: 90, description: 'A CI/CD feature of GitHub that allows you to automate your workflow', icon: '/images/tech-icons/githubactions-color.svg'},
            { name: 'Vercel', level: 90, description: 'A cloud platform for static sites and serverless functions', icon: '/images/tech-icons/vercel-color.svg'},
            { name: 'Netlify', level: 90, description: 'A cloud platform for hosting static websites and web applications', icon: '/images/tech-icons/netlify-color.svg'},
        ]
    }
]

export default skills;