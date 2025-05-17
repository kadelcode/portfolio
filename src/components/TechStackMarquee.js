const TechStackMarquee = () => {
    const techIcons = [
      { name: 'HTML', src: '/images/tech-icons/html5-color.svg', alt: 'HTML Icon' },
      { name: 'CSS', src: '/images/tech-icons/css3-color.svg', alt: 'CSS Icon' },
      { name: 'JavaScript', src: '/images/tech-icons/javascript-color.svg', alt: 'JavaScript Icon' },
      { name: 'Python', src: '/images/tech-icons/python-color.svg', alt: 'Python Icon' },
      { name: 'C', src: '/images/tech-icons/c-color.svg', alt: 'C Icon' },

      { name: 'React', src: '/images/tech-icons/react-color.svg', alt: 'React Icon' },
      { name: 'Nodejs', src: '/images/tech-icons/nodedotjs-color.svg', alt: 'Node.js Icon' },
      { name: 'Nextjs', src: '/images/tech-icons/nextdotjs-color.svg', alt: 'Next.js Icon' },
      { name: 'Django', src: '/images/tech-icons/django-color.svg', alt: 'Django Icon' },
      { name: 'Flask', src: '/images/tech-icons/flask-color.svg', alt: 'Flask Icon' },

      { name: 'Git', src: '/images/tech-icons/git-color.svg', alt: 'Git Icon' },
      { name: 'Github', src: '/images/tech-icons/github-color.svg', alt: 'Git Icon' },
      { name: 'Gitlab', src: '/images/tech-icons/gitlab-color.svg', alt: 'Git Icon' },
      { name: 'BitBucket', src: '/images/tech-icons/bitbucket-color.svg', alt: 'BitBucket Icon' },

      { name: 'PostgreSQL', src: '/images/tech-icons/postgresql-color.svg', alt: 'PostgreSQL Icon' },
      { name: 'SQLite', src: '/images/tech-icons/sqlite-color.svg', alt: 'SQLite Icon' },
      { name: 'MongoDB', src: '/images/tech-icons/mongodb-color.svg', alt: 'MongoDB Icon' },
      { name: 'Redis', src: '/images/tech-icons/redis-color.svg', alt: 'Redis Icon' },
      { name: 'MySQL', src: '/images/tech-icons/mysql-color.svg', alt: 'MySQL Icon' },
      { name: 'Firebase', src: '/images/tech-icons/firebase-color.svg', alt: 'Firebase Icon' },
      { name: 'Supabase', src: '/images/tech-icons/supabase-color.svg', alt: 'Supabase Icon' },

      { name: 'AWS', src: '/images/tech-icons/amazonwebservices-color.svg', alt: 'AWS Icon' },
      { name: 'GCP', src: '/images/tech-icons/googlecloud-color.svg', alt: 'GCP Icon' },
      { name: 'Render', src: '/images/tech-icons/render-color.svg', alt: 'Render Icon' },
      { name: 'Railway', src: '/images/tech-icons/railway-color.svg', alt: 'Railway Icon' },
      { name: 'Vercel', src: '/images/tech-icons/vercel-color.svg', alt: 'Vercel Icon' },
      { name: 'Netlify', src: '/images/tech-icons/netlify-color.svg', alt: 'Netlify Icon' },
      { name: 'Docker', src: '/images/tech-icons/docker-color.svg', alt: 'Docker Icon' },
      { name: 'Kubernetes', src: '/images/tech-icons/kubernetes-color.svg', alt: 'Kubernetes Icon' },
      { name: 'Github Actions', src: '/images/tech-icons/githubactions-color.svg', alt: 'GitHub Actions Icon' },

      // ... more
    ];
  
    return (
      <div className="overflow-hidden bg-gray-100 dark:bg-gray-800 py-4">
        <div className="flex animate-marquee items-center space-x-4 sm:space-x-6">
          {[...techIcons, ...techIcons].map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{color: icon.color}}
              className={`h-8 w-8 mr-6 text-[${icon.color}]`}
            />
          ))}
        </div>
      </div>
    );
};
  
export default TechStackMarquee;
  