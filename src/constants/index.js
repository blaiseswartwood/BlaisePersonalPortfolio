import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    starbucks,
    tesla,
    clientprototyping,
    editortrees,
    linter,
    computerprocessor,
    portfolio,
    swimming,
    purdue,
    microsoft,
    java,
    microsoftsql,
    python,
    pytorch,
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
      title: "Engineering Management",
      icon: web,
    },
    {
      title: "Artifical Intelligence",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "MicrosoftSQL",
      icon: microsoftsql,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Purdue Research Intern",
      company_name: "Purdue University",
      icon: purdue,
      iconBg: "#CEB888",
      date: "June 2023 - July 2023",
      points: [
        "Mentor: Dr. Celik Berkay, Computer Science, Purdue Security Laboratory",
        "Improving the Criticality Score Algorithm to identify most important open-source projects for enhanced security",
        "Using machine learning, linear regression, t-SNE visualization, and feature selection for analysis",
        "Identifying the most important features to create and measure a project's importance",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#D3D3D3",
      date: "June 2024 - September 2024",
      points: [
        "TBD",
      ],
    },
  ];
  
  const testimonials = [
    {
      title: "Parson's Problems",
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Dr. Joseph Hollingsworth",
      designation: "Computer Science Professor",
      company: "Rose-Hulman Institute of Technology",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      title: "Criticality Score Algorithm",
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Dr. Celik Berkay",
      designation: "Computer Science Professor",
      company: "Purdue University",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      title: "Neural Network Classification of Myopathy Signals",
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Dr. Abdulkadir Sengur",
      designation: "Electrical Engineering Professor",
      company: "Firat University",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "This Website",
      description:
        "Personal portfolio website with 3-D image displays and advanced animation",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/rhit-swartwba/BlaisePersonalPortfolio",
    },
    {
      name: "Client Prototyping",
      description:
        "Eliciting needs and features from a client and transforming that software requirements",
      tags: [
        {
          name: "Balsamiq",
          color: "blue-text-gradient",
        },
        {
          name: "Requirements",
          color: "green-text-gradient",
        },
        {
          name: "Use Cases",
          color: "pink-text-gradient",
        },
      ],
      image: clientprototyping,
      source_code_link: "https://github.com/rhit-swartwba/ClientPrototyping",
    },
    {
      name: "Swimming Database",
      description:
        "Java graphics interface tracks local swim times using MicrosoftSQL database.",
      tags: [
        {
          name: "MicrosoftSQL",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Connectivity",
          color: "pink-text-gradient",
        },
      ],
      image: swimming,
      source_code_link: "https://github.com/rhit-swartwba/SwimmingDatabase",
    },
    {
      name: "Computer Processor",
      description:
        "Java graphics interface to keep track of local swimmers times with a MySQL database.",
      tags: [
        {
          name: "Verilog",
          color: "blue-text-gradient",
        },
        {
          name: "ModelSim",
          color: "green-text-gradient",
        },
        {
          name: "Quartus",
          color: "pink-text-gradient",
        },
      ],
      image: computerprocessor,
      source_code_link: "https://github.com/rhit-swartwba/ComputerProcessor",
    },
    {
      name: "OOP Linter",
      description:
        "Java Linter that detects violations of object-orientated design and design patterns",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "ASM",
          color: "green-text-gradient",
        },
        {
          name: "Object-Orientated Design",
          color: "pink-text-gradient",
        },
      ],
      image: linter,
      source_code_link: "https://github.com/rhit-swartwba/LinterDesignPatterns",
    },
    {
      name: "Editor Trees",
      description:
        "Created a data structure for a text editor: a balanced tree with rank and balance codes.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Tree",
          color: "green-text-gradient",
        },
        {
          name: "Data Structures",
          color: "pink-text-gradient",
        },
      ],
      image: editortrees,
      source_code_link: "https://github.com/rhit-swartwba/EditorTrees",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };