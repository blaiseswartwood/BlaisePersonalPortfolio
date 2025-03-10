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
    criticalityscore,
    myopathy,
    plearn,
    rosehulman,
    sunsetsails,
    xv6threads,
    indiana211,
    googlelogo,
    poker,
    swimdata,
    pneu,
    rustascii,
    masters,

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
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "Generative AI",
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

  const education = [
    {
        titlefront: "Bachelor's of Science, Computer Science",
        school: "Rose-Hulman Institute of Technology",
        iconfront: rosehulman,
        date: "August 2022 - May 2025",
        points: ["Artificial Intelligence", "Software Requirements Engineering", "Software Architecture Design",
                "Introduction to Databases", "Operating Systems", "Web Development", "Data Structures and Algorithms"],
        GPA: "4.0  Minor: Mathematics, Data Science",
    },
    {
        titlefront: "Masters in Science, Data Science",
        school: "Georgia Institute of Technology",
        iconfront: masters,
        date: "August 2025 - May 2027",
        points: ["Introduction to Graduate Algorithms", "Machine Learning", "Reinforcement Learning and Decision Making", "Machine Learning for Trading", "Bayesian Methods", 
          "Big Data for Health", "Distributed Computing", "System Design for Cloud Computing", "Network Security", "Robotics: AI Techniques"
        ],
        GPA: "4.0",
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
      title: "Research Intern",
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
      title: "Software Engineer Intern",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#D3D3D3",
      date: "June 2024 - September 2024",
      points: [
        "Designed a new 3rd party endpoint feature in Azure Front Door (AFD), Azure's content delivery network",
        "Developed the two-rule design to promote customer flexibility in AFD's rules engine",
        "Added customer ability to send client requests to third-party endpoints using a subrequest",
        "Implemented in both the control and data plane and tested end-to-end in test environments using a security use case"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Google",
      icon: googlelogo,
      iconBg: "#D3D3D3",
      date: "June 2025 - September 2025",
      points: [
        "Contract lifecycle management using LLMs"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#D3D3D3",
      date: "July 2025 - Current",
      points: [
        "Azure Networking software engineer"
      ],
    },
  ];
  
  const researchprojects = [
    {
      title: "Parson's Problems",
      description:
        ["CS Educational Research with Parson's Blocks, ordering blocks of Assembly and C code and saving each attempt to visualize it to gain insight into student thoughts.",
        "Wrote questions in html along with the parsing information in Java",
        " Implementing an IRB approved trial in Rose-Hulman CSSE132 course"],
        tags: [
          {
            name: "Education",
            color: "blue-text-gradient",
          },
          {
            name: "HTML",
            color: "green-text-gradient",
          },
          {
            name: "Java",
            color: "pink-text-gradient",
          },
        ],
      mentor: "Dr. Joseph Hollingsworth",
      designation: "Computer Science",
      institution: "Rose-Hulman Institute of Technology",
      source_code_link: "https://github.com/rhit-swartwba/ParsonsEducation",
      extra_link: "https://us.prairielearn.com/pl/course_instance/143635",
      img: plearn,
      date: "02/03/2023 - 05/02/2025",
    },
    {
      title: "Criticality Score Algorithm",
      description:
        ["Improved the criticality score algorithm to rank the importance of open-source projects",
        "Used SciKit-Learn and Python to run machine learning t-SNE visualization, regressions, and recursive feature analysis",
        "Presented and earned a travel scholarship for the 2023 National Diversity in STEM Conference (NDiSTEM) in Portland, Oregon"],
        tags: [
          {
            name: "SciKit-Learn",
            color: "blue-text-gradient",
          },
          {
            name: "Machine Learning",
            color: "green-text-gradient",
          },
          {
            name: "Python",
            color: "pink-text-gradient",
          },
        ],
      mentor: "Dr. Celik Berkay",
      designation: "Computer Science",
      institution: "Purdue University",
      source_code_link: "https://github.com/rhit-swartwba/CriticalityScoreAnalysis",
      extra_link: "https://drive.google.com/file/d/1QzbW7GuYYveRGOo0fwb-a43s3KiAaSU8/view?usp=sharing",
      img: criticalityscore,
      date: "06/01/2023 - 07/26/2023",
    },
    {
      title: "Classifying Myopathy EMGs",
      description:
        ["Created a convolutional neural network using transfer learning in Python and MATLAB to that distinguished between myopathic and normal electromyography signals with a 96.57% accuracy",
          "Transformed images into spectrogram and scalogram images to improve neural network detection",
         "Earned 3rd Place Grand Award in Bioinformatics at the International Science and Engineering Fair"],
         tags: [
          {
            name: "PyTorch",
            color: "blue-text-gradient",
          },
          {
            name: "MATLAB",
            color: "green-text-gradient",
          },
          {
            name: "Python",
            color: "pink-text-gradient",
          },
        ],
      mentor: "Dr. Abdulkadir Sengur",
      designation: "Electrical Engineering",
      institution: "Firat University",
      source_code_link: "https://github.com/rhit-swartwba/MyopathyClassification",
      extra_link: "https://projectboard.world/isef2021/project/cbio044---high-accuracy-classification-of-myopathy",
      img: myopathy,
      date: "05/02/2020 - 09/10/2020",
    },
  ];
  
  const projects = [
    {
      name: "Rust ASCII Art Animation",
      description:
        "Designed a Rust ASCII animation framework using OpenGL with an XP approach",
      tags: [
        {
          name: "Rust",
          color: "blue-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
        {
          name: "System Design",
          color: "pink-text-gradient",
        },
      ],
      image: rustascii,
      source_code_link: "https://github.com/rhit-Dexterra/SeniorProject",
    },
    {
      name: "Sunset Sails",
      description:
        "Designed the Sunset Sails website for business clients",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "NextJS",
          color: "pink-text-gradient",
        },
      ],
      image: sunsetsails,
      source_code_link: "https://sunsetsailshawaii.com",
    },
    {
      name: "Algorithmic Game Theory",
      description:
        "Analyzed webscraped data to find trends in high school versus college swim times",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Data Mining",
          color: "pink-text-gradient",
        },
      ],
      image: swimdata,
      source_code_link: "https://github.com/rhit-calviet/Swim-Analysis",
    },
    {
      name: "Generative AI",
      description:
        "Analyzed webscraped data to find trends in high school versus college swim times",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Data Mining",
          color: "pink-text-gradient",
        },
      ],
      image: swimdata,
      source_code_link: "https://github.com/rhit-calviet/Swim-Analysis",
    },
    {
      name: "Computer Networks",
      description:
        "Analyzed webscraped data to find trends in high school versus college swim times",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Data Mining",
          color: "pink-text-gradient",
        },
      ],
      image: swimdata,
      source_code_link: "https://github.com/rhit-calviet/Swim-Analysis",
    },
    {
      name: "Blackjack Detection",
      description:
        "Created a card dataset generator and live detection system to guide blackjack players",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MATLAB",
          color: "green-text-gradient",
        },
        {
          name: "YOLO",
          color: "pink-text-gradient",
        },
      ],
      image: poker,
      source_code_link: "https://github.com/rhit-swartwba/PlayingCardHandRecognition",
    },
    {
      name: "College Swim Analysis",
      description:
        "Analyzed webscraped data to find trends in high school versus college swim times",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Data Mining",
          color: "pink-text-gradient",
        },
      ],
      image: swimdata,
      source_code_link: "https://github.com/rhit-calviet/Swim-Analysis",
    },
    {
      name: "Pneumonia Detection",
      description:
        "Used a ResNet50 model to distinguish normal and pneumonia chest X-rays",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "pink-text-gradient",
        },
      ],
      image: pneu,
      source_code_link: "https://github.com/rhit-swartwba/XRayPneumoniaDetection",
    },
    {
      name: "Portfolio Website",
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
      name: "XV6 Threads",
      description:
        "Implemented thread API and syscalls in the xv6 operating system",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Operating Systems",
          color: "green-text-gradient",
        },
        {
          name: "xv6",
          color: "pink-text-gradient",
        },
      ],
      image: xv6threads,
      source_code_link: "https://github.com/rhit-swartwba/XV6Threads",
    },
    {
      name: "ValleyInns SRE",
      description:
        "Eliciting needs and features from hotel management clients into software requirements",
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
      name: "Indiana 211 Welfare",
      description:
        "Created a website prototype for Indiana 211 government clients for welfare programs",
      tags: [
        {
          name: "Clients",
          color: "blue-text-gradient",
        },
        {
          name: "Requirements",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: indiana211,
      source_code_link: "https://github.com/rhit-swartwba/Indiana211Website",
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
        "Designed a multi-cycle load-store computer processor for simplicity and speed.",
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
        "Created a data structure for a text editor: a balanced tree with rank and balance codes",
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
  
  export { services, technologies, experiences, researchprojects, projects, education};