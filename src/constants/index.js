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
    clogo,
    rust,
    matlab,
    nginx,
    rlogo,
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
    auction,
    lb,
    bitnet,

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
      title: "Generative AI",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
    {
      title: "Software Engineering",
      icon: web,
    },
  ];

  const education = [
    {
      titlefront: "Masters in Information and Data Science",
      school: "University of California, Berkeley",
      iconfront: masters,
      date: "August 2025 - May 2028",
      points: [ "Research Design and Application for Data and Analysis",
                 "Fundamentals of Data Engineering",
                 "Applied Machine Learning",
                 "Machine Learning at Scale",
                 "Machine Learning Systems Engineering",
                 "Natural Lang Processing with Deep Learning",
                 "Generative AI: Foundations, Techniques, and Challenges",
      ],
      GPA: "4.0",
    },
    {
        titlefront: "Bachelors of Science, Computer Science",
        school: "Rose-Hulman Institute of Technology",
        iconfront: rosehulman,
        date: "August 2022 - May 2025",
        points: ["Artificial Intelligence", 
                "Generative AI", 
                "Deep Learning", 
                "Data Mining", 
                "Computer Networks", 
                "Image Recognition",
        ],
        GPA: "4.0  Minor: Mathematics, Data Science",
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
      name: "R",
      icon: rlogo,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "C",
      icon: clogo,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "Nginx",
      icon: nginx,
    },
    {
      name: "MicrosoftSQL",
      icon: microsoftsql,
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
        "Presented my research at SACNAS Conference in Portland Oregon with a travel scholarship",
        "Used machine learning and statistical analysis to identify weaknesses in the Criticality Score Algorithm to improve the consistency in ranking the most important open-source projects",
        "Mentored by Dr. Celik Berkay, Computer Science, Purdue Security Laboratory",
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
        "Added customer ability to send client requests to third-party endpoints using a subrequest",
        "Developed the two-rule design to promote customer flexibility",
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
        ["Researched Parson Blocks as an intermediate question type to test their effectiveness while also gaining insights into student thinking to improve course curriculum and test",
          "Created a data pipeline to extract and analyze the ordering of student submissions",
          "Completed IRB approved study in Spring 2024, all of 2025 with 2 question sets for CSSE132 Intro to Systems Programming"],
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
      extra_link: "https://drive.google.com/file/d/1yV_amOxD7P3IUF6ptWxDlPKKbTiq6Y_v/view?usp=sharing",
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
      extra_link: "https://isef.net/project/cbio044---high-accuracy-classification-of-myopathy",
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
          name: "Glium",
          color: "green-text-gradient",
        },
        {
          name: "Tokio",
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
      name: "Auction Truthfulness",
      description:
        "Verifying truthfulness of VCG auctions using reinforcement learning and game theory.",
      tags: [
        {
          name: "Reinforcement Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Game Theory",
          color: "green-text-gradient",
        },
      ],
      image: auction,
      source_code_link: "https://github.com/blaiseswartwood/Auction-Analysis-with-Reinforcement-Learning",
    },
    {
      name: "LLM Load Balancer",
      description:
        "Created a load balancer for LLM servers with semantic caching and heartbeats.",
      tags: [
        {
          name: "Generative AI",
          color: "blue-text-gradient",
        },
        {
          name: "Networks",
          color: "green-text-gradient",
        },
        {
          name: "HuggingFace",
          color: "pink-text-gradient",
        },
      ],
      image: lb,
      source_code_link: "https://github.com/blaiseswartwood/AILoadBalancer",
    },
    {
      name: "1-Bit LLM Testing",
      description:
        "Compared performance of 1-bit LLM models to standard LLM models",
      tags: [
        {
          name: "Generative AI",
          color: "blue-text-gradient",
        },
        {
          name: "BitNet",
          color: "green-text-gradient",
        },
        {
          name: "ChatGPT",
          color: "pink-text-gradient",
        },
      ],
      image: bitnet,
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
        "Eliciting needs and features from clients into software requirements",
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