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
    git,
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
    scikitlearn,
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
      name: "SciKit-Learn",
      icon: scikitlearn,
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
  
  const researchprojects = [
    {
      title: "Parson's Problems",
      description:
        "CS Educational Research with Parson's Blocks, ordering blocks of Assembly and C code and saving each attempt to visualize it to gain insight into student thoughts. Implementing an IRB approved trial in Rose-Hulman CSSE132 course",
      mentor: "Dr. Joseph Hollingsworth",
      designation: "Computer Science Professor",
      institution: "Rose-Hulman Institute of Technology",
      source_code_link: "https://github.com/rhit-swartwba/ParsonsEducation"
    },
    {
      title: "Criticality Score Algorithm",
      description:
        "Improved the criticality score algorithm to rank the importance of open-source projects using machine learning in Python Presented and earned a travel scholarship for the 2023 National Diversity in STEM Conference (NDiSTEM) in Portland, Oregon",
      mentor: "Dr. Celik Berkay",
      designation: "Computer Science Professor",
      institution: "Purdue University",
      source_code_link: "https://github.com/rhit-swartwba/CriticalityScoreAnalysis",
    },
    {
      title: "Neural Network Classification of Myopathy Signals",
      description:
        "Created a convolutional neural network using transfer learning in Python and MATLAB to that distinguished between myopathic and normal electromyography signals with a 96.57% accuracy Earned 3rd Place Grand Award in Bioinformatics at the International Science and Engineering Fair",
      mentor: "Dr. Abdulkadir Sengur",
      designation: "Electrical Engineering Professor",
      institution: "Firat University",
      source_code_link: "https://github.com/rhit-swartwba/MyopathyClassification",
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
  
  export { services, technologies, experiences, researchprojects, projects };