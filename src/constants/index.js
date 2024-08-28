import {
    mobile,
    backend,
    creator,
    web,
    roomiehub,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    amazon,
    verzeo,
    tcs,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fitness Geek",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer (Full Stack)",
      company_name: "RoomieHub, LLC | Phoenix, United States",
      icon: roomiehub,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
      "Led development of 2 primary modules: User Profile Navigation and Progress Tracking utilizing React Native, AWS, and Redux.",
      "Deployed User Profile module on AWS EC2 ensuring 99.9% uptime and efficient resource utilization for the backend.",
      "Created 4 intuitive navigation components for User Profile dashboard employing React Navigation.",
      "Developed home screen functionality, supporting image uploads up to 10 MB and enhancing state management using Redux.",

      ],
    },    {
      title: "Software Engineer (Full Stack)",
      company_name: "RoomieHub, LLC | Phoenix, United States",
      icon: roomiehub,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
      "Led development of 2 primary modules: User Profile Navigation and Progress Tracking utilizing React Native, AWS, and Redux.",
      "Deployed User Profile module on AWS EC2 ensuring 99.9% uptime and efficient resource utilization for the backend.",
      "Created 4 intuitive navigation components for User Profile dashboard employing React Navigation.",
      "Developed home screen functionality, supporting image uploads up to 10 MB and enhancing state management using Redux.",

      ],
    },
   
    {
      title: "Software Engineer (Full Stack)",
      company_name: "RoomieHub, LLC | Phoenix, United States",
      icon: roomiehub,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
      "Led development of 2 primary modules: User Profile Navigation and Progress Tracking utilizing React Native, AWS, and Redux.",
      "Deployed User Profile module on AWS EC2 ensuring 99.9% uptime and efficient resource utilization for the backend.",
      "Created 4 intuitive navigation components for User Profile dashboard employing React Navigation.",
      "Developed home screen functionality, supporting image uploads up to 10 MB and enhancing state management using Redux.",

      ],
    },
    {
      title: "AWS Software Developer",
      company_name: "Amazon (Contract) | Hyderabad, India",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "December 2021 - July 2023",
      points: [
        "Created a Low Code-No-Code environment, developed 50+ AWS APIs and respective backend services leveraging Java & C++.",
        "Initiated and monitored real-time data ingestion by deploying AWS Kinesis, handling up to 10,000 events per minute.",
        "Produced Subscription Notification Service (SNS) with AWS SQS & Lambda managing over 4000 notifications daily.",
        "Presented 3 SNS topics acting as access points for subscribers to receive message notifications on selected subjects in AWS.",
        "Spearheaded development of an AWS application to analyze over 1000 PDF documents daily using the AWS Textract service.",  
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Tata Consultancy Services | Hyderabad, India",
      icon: tcs,
      iconBg: "#383E56",
      date: "October 2021 - July 2023",
      points: [
        "Reduced response times from 500ms to 300ms for User Authentication micro-service improving performance and stability.",
        "Earned “On-the-Spot” for mitigating application-level bugs by 12% through strategic code refactoring initiatives.",
        "Acquired expertise in Java and Analytics, leading to proficient software development and data-driven insights.",
       ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Verzeo | Hyderabad, India",
      icon: verzeo,
      iconBg: "#E6DEDD",
      date: "June 2019 - November 2019",
      points: [
        "Utilized Azure Cache for Redis to build an E-commerce solution, for an online store to decrease load times by 5 seconds.",
        "Implemented real-time inventory management for 40,000+ products with Azure functions to drop stock-outs by 800 annually.",
        ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };