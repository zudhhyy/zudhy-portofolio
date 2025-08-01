import { LinkedInData } from 'types/linkedin';

const LINKEDIN_DATA: LinkedInData = {
  profile: {
    name: "Tubagus Dhaifullah Zuhdi",
    headline: "Fullstack Developer | Frontend Specialist | React & React Native Expert",
    location: "Jakarta, Indonesia",
    about: "Passionate Fullstack Developer with 3+ years of experience specializing in frontend development. I love creating high-performance, visually appealing, and scalable web and mobile applications. Currently working at Heal Station Indonesia as a Frontend Developer, leading projects from conception to deployment. I'm particularly interested in React, React Native, Next.js, and modern web technologies. Always eager to learn new technologies and contribute to innovative projects.",
    contact: {
      linkedin: "https://www.linkedin.com/in/tubagus-dhaifullah-zuhdi/",
      github: "https://github.com/zudhy",
      email: "tubagus.zuhdi@gmail.com"
    }
  },
  skills: [
    // Programming Languages
    { name: "JavaScript", category: "Programming Languages", proficiency: "Expert" },
    { name: "TypeScript", category: "Programming Languages", proficiency: "Advanced" },
    { name: "Python", category: "Programming Languages", proficiency: "Intermediate" },
    { name: "Java", category: "Programming Languages", proficiency: "Intermediate" },
    { name: "PHP", category: "Programming Languages", proficiency: "Intermediate" },
    
    // Frameworks & Libraries
    { name: "React", category: "Frameworks & Libraries", proficiency: "Expert" },
    { name: "React Native", category: "Frameworks & Libraries", proficiency: "Advanced" },
    { name: "Next.js", category: "Frameworks & Libraries", proficiency: "Advanced" },
    { name: "Node.js", category: "Frameworks & Libraries", proficiency: "Advanced" },
    { name: "Express.js", category: "Frameworks & Libraries", proficiency: "Intermediate" },
    { name: "Laravel", category: "Frameworks & Libraries", proficiency: "Intermediate" },
    { name: "Tailwind CSS", category: "Frameworks & Libraries", proficiency: "Advanced" },
    { name: "Bootstrap", category: "Frameworks & Libraries", proficiency: "Advanced" },
    { name: "Material-UI", category: "Frameworks & Libraries", proficiency: "Intermediate" },
    
    // Tools & Technologies
    { name: "Git", category: "Tools & Technologies", proficiency: "Advanced" },
    { name: "GitHub", category: "Tools & Technologies", proficiency: "Advanced" },
    { name: "VS Code", category: "Tools & Technologies", proficiency: "Expert" },
    { name: "Postman", category: "Tools & Technologies", proficiency: "Intermediate" },
    { name: "Figma", category: "Tools & Technologies", proficiency: "Intermediate" },
    { name: "Adobe XD", category: "Tools & Technologies", proficiency: "Intermediate" },
    { name: "Webpack", category: "Tools & Technologies", proficiency: "Intermediate" },
    { name: "Vite", category: "Tools & Technologies", proficiency: "Advanced" },
    
    // Databases
    { name: "MySQL", category: "Databases", proficiency: "Intermediate" },
    { name: "PostgreSQL", category: "Databases", proficiency: "Intermediate" },
    { name: "MongoDB", category: "Databases", proficiency: "Intermediate" },
    { name: "Firebase", category: "Databases", proficiency: "Intermediate" },
    
    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", proficiency: "Intermediate" },
    { name: "Vercel", category: "Cloud & DevOps", proficiency: "Advanced" },
    { name: "Netlify", category: "Cloud & DevOps", proficiency: "Intermediate" },
    { name: "Docker", category: "Cloud & DevOps", proficiency: "Beginner" },
    
    // Design & UI/UX
    { name: "Responsive Design", category: "Design & UI/UX", proficiency: "Advanced" },
    { name: "UI/UX Design", category: "Design & UI/UX", proficiency: "Intermediate" },
    { name: "Mobile App Design", category: "Design & UI/UX", proficiency: "Intermediate" },
  ],
  education: [
    {
      institution: "Universitas Bina Bangsa",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      startDate: "2019",
      endDate: "2023",
      description: "Studied computer science with focus on software development, algorithms, and web technologies."
    }
  ],
  certifications: [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      issueDate: "2023",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/example"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issueDate: "2022",
      credentialUrl: "https://www.freecodecamp.org/certification/example/javascript-algorithms-and-data-structures"
    }
  ],
  projects: [
    {
      title: "Heal Station Mobile App",
      description: "A comprehensive healthcare mobile application built with React Native. Features include patient management, appointment scheduling, and telemedicine capabilities. Currently in production with thousands of active users.",
      technologies: ["React Native", "TypeScript", "Node.js", "MySQL", "AWS"],
      featured: true,
      imageUrl: "/src/assets/images/projects/heal-station.jpg"
    },
    {
      title: "Desociety.io - Web3 Platform",
      description: "A decentralized social platform for NFT creators and collectors. Integrated blockchain functionality with wallet connections, NFT marketplace, and social features.",
      technologies: ["React", "Next.js", "Ethers.js", "Wagmi", "WalletConnect", "Solidity"],
      githubUrl: "https://github.com/zudhy/desociety",
      featured: true,
      imageUrl: "/src/assets/images/projects/desociety.jpg"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management. Built with modern web technologies and responsive design.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/zudhy/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.zudhy.dev",
      featured: true,
      imageUrl: "/src/assets/images/projects/ecommerce.jpg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React Query"],
      githubUrl: "https://github.com/zudhy/task-manager",
      liveUrl: "https://task-manager.zudhy.dev",
      featured: false,
      imageUrl: "/src/assets/images/projects/task-manager.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/zudhy/weather-dashboard",
      liveUrl: "https://weather.zudhy.dev",
      featured: false,
      imageUrl: "/src/assets/images/projects/weather.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      githubUrl: "https://github.com/zudhy/portfolio",
      liveUrl: "https://zudhy.dev",
      featured: false,
      imageUrl: "/src/assets/images/projects/portfolio.jpg"
    }
  ]
};

export default LINKEDIN_DATA; 