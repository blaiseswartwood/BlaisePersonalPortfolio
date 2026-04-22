import {
    mobile, backend, creator, web,
    clogo, rust, matlab, nginx, rlogo,
    clientprototyping, editortrees, linter, computerprocessor,
    portfolio, swimming, purdue, microsoft, java, microsoftsql,
    python, pytorch, scikitlearn, criticalityscore, myopathy,
    plearn, rosehulman, sunsetsails, xv6threads, indiana211,
    googlelogo, poker, swimdata, pneu, rustascii,
    auction, lb, mililani, alohapacific,
} from "../assets";

// Re-export data constants
export * from './data';
  
  const services = [

    {
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "AI Agents",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
    {
      title: "Data Science",
      icon: backend,
    },
  ];

  const education = [
    // {
    //   titlefront: "Masters in Information and Data Science",
    //   school: "University of California, Berkeley",
    //   iconfront: masters,
    //   date: "August 2025 - May 2028",
    //   points: [ "Research Design and Application for Data and Analysis",
    //              "Fundamentals of Data Engineering",
    //              "Applied Machine Learning",
    //              "Machine Learning at Scale",
    //              "Machine Learning Systems Engineering",
    //              "Natural Lang Processing with Deep Learning",
    //              "Generative AI: Foundations, Techniques, and Challenges",
    //   ],
    //   GPA: "4.0",
    // },
    {
        titlefront: "Bachelors of Science, Computer Science",
        school: "Rose-Hulman Institute of Technology",
        iconfront: rosehulman,
        date: "August 2022 - May 2025",
        points: [
                "Artificial Intelligence", 
                "Generative AI", 
                "Deep Learning", 
                "Data Mining", 
                "Computer Architecture I & II",
                "Operating Systems",
                "Design and Analysis of Algorithms",
                "Theory of Computation",
                "Software Requirements Engineering",
                "Software Design",
                "Computer Networks", 
                "Image Recognition",
        ],
        GPA: "4.0",
        minors: ["Mathematics", "Data Science"],
    },
    {
        titlefront: "Valedictorian",
        school: "Mililani High School, Hawai'i",
        iconfront: mililani,
        date: "August 2018 - May 2022",
        points: [
                "AP Calculus BC",
                "Calculus 3",
                "AP Physics C: Mechanics",
                "AP Physics C: E&M",
                "AP Biology",
                "AP Psychology",
                "AP World History",
                "AP US History",
                "AP Environmental Science",
                "AP Computer Science A",
                "AP Computer Science Principles",
                "AP Language & Composition",
                "AP Literature",
        ],
        GPA: "4.5 / 4.0",
        courseworkLabel: "AP & Honors Courses",
        highlights: ["14 AP 5s", "36 ACT", "ISEF 3rd Place"],
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
      title: "IT Intern",
      subtitle: "",
      company_name: "Aloha Pacific Federal Credit Union",
      icon: alohapacific,
      iconBg: "#FFFFFF",
      date: "June 2021 - August 2021",
      points: [
        "Built an **inventory management program** (Python front-end, SQL back-end) to organize hardware assets",
        "Assisted in general maintenance and inventory keeping of **IT equipment**",
      ],
    },
    {
      title: "Research Intern",
      subtitle: "",
      company_name: "Purdue University",
      icon: purdue,
      iconBg: "#CEB888",
      date: "June 2023 - August 2023",
      points: [
        "Presented at NDiSTEM Conference — awarded **travel scholarship**",
        "Retained **98%** algorithm performance using only **5 features** via ML (Python, R)",
        "Improved open-source project ranking for the **Open Source Security Foundation**",
      ],
    },
    {
      title: "Software Engineer Intern",
      subtitle: "Azure Networking",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#D3D3D3",
      date: "June 2024 - August 2024",
      points: [
        "Designed new **Azure Front Door** feature routing requests to external endpoints for pre-origin verification",
        "Built **two-rule system** enabling URL redirect, cache control, header modification & more",
        "Implemented E2E across **control plane (C#)** and **data plane (C, Rust)**",
      ],
    },
    {
      title: "Software Engineer Intern",
      subtitle: "Google Cloud Business Partner",
      company_name: "Google",
      icon: googlelogo,
      iconBg: "#D3D3D3",
      date: "June 2025 - August 2025",
      points: [
        "Reduced malformed responses to **0.0%**, improved extraction accuracy to **86%** via model tuning on **1,000+ obligations** (Python)",
        "Cut integration time by **72%** across **50+ obligation types** with type-safe Gemini library (Java)",
        "Shipped first **E2E redline obligation extraction** flow in pre-production",
      ],
    },
    {
      title: "Software Engineer",
      subtitle: "Azure Front Door",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#D3D3D3",
      date: "September 2025 - Current",
      points: [
        "Built **traffic replayer** forking prod traffic to pre-prod for **A/B pre-release validation**",
        "Boosted config coverage **24% → 91%** and dev efficiency **~62%** with automated Perl testing framework",
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
      category: "AI / ML",
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
      category: "AI / ML",
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
      category: "AI / ML",
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
      category: "AI / ML",
    },
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
      source_code_link: "https://github.com/blaiseswartwood/RustASCIIArt",
      category: "Systems",
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
      category: "Systems",
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
      category: "Systems",
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
      category: "Data",
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
      category: "Web",
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
      category: "Web",
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
      category: "Systems",
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
      category: "Web",
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
      category: "Systems",
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
      category: "Web",
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
      category: "Data",
    },
  ];
  
  const awards = [
    {
      title: "John A. Logan Award",
      event: "Rose-Hulman Institute of Technology",
      date: "2022 – 2025",
      description: "Awarded to the student-athlete with the highest GPA. Maintained a perfect 4.0 GPA as a four-year DIII Varsity Swim & Dive athlete.",
      icon: "military_tech",
      color: "#ff6f00",
    },
    {
      title: "3rd Place Grand Award — Bioinformatics",
      event: "International Science and Engineering Fair (ISEF)",
      date: "2020",
      description: "Classified myopathic vs. normal EMG signals with 96.57% accuracy using CNN transfer learning in Python and MATLAB.",
      icon: "emoji_events",
      color: "#FFD700",
    },
    {
      title: "NDiSTEM Travel Scholarship",
      event: "National Diversity in STEM Conference",
      date: "2023",
      description: "Awarded travel scholarship to present machine learning research on open-source criticality scoring at the NDiSTEM Conference in Portland, Oregon.",
      icon: "flight_takeoff",
      color: "#00cea8",
    },
  ];

  const skills = [
    { name: "PyTorch", level: 90, category: "AI / ML" },
    { name: "Scikit-Learn", level: 90, category: "AI / ML" },
    { name: "TensorFlow", level: 75, category: "AI / ML" },
    { name: "Hugging Face", level: 80, category: "AI / ML" },
    { name: "LLM Fine-Tuning", level: 85, category: "AI / ML" },
    { name: "Computer Vision", level: 80, category: "AI / ML" },
    { name: "Azure", level: 85, category: "Cloud / Infra" },
    { name: "Google Cloud", level: 75, category: "Cloud / Infra" },
    { name: "Docker", level: 70, category: "Cloud / Infra" },
    { name: "Nginx", level: 75, category: "Cloud / Infra" },
    { name: "CI / CD", level: 80, category: "Cloud / Infra" },
    { name: "Linux", level: 85, category: "Cloud / Infra" },
    { name: "React", level: 80, category: "Web / Systems" },
    { name: "Node.js", level: 75, category: "Web / Systems" },
    { name: "REST APIs", level: 85, category: "Web / Systems" },
    { name: "OS Internals", level: 80, category: "Web / Systems" },
    { name: "Networking", level: 85, category: "Web / Systems" },
    { name: "Git", level: 90, category: "Web / Systems" },
  ];

  const testimonials = [
    {
      quote: "Blaise consistently demonstrated exceptional technical ability and a remarkable aptitude for independent problem-solving. His work on the criticality score algorithm surpassed my expectations for an undergraduate researcher.",
      name: "Dr. Celik Berkay",
      title: "Assistant Professor, Computer Science",
      company: "Purdue University",
    },
    {
      quote: "One of the most driven students I've mentored. Blaise's work on Parson's Problems showed both strong engineering skills and a genuine curiosity for understanding how students learn — a rare combination.",
      name: "Dr. Joseph Hollingsworth",
      title: "Professor, Computer Science",
      company: "Rose-Hulman Institute of Technology",
    },
    {
      quote: "Blaise quickly ramped up on a complex distributed system and delivered production-quality features involving both control plane and data plane work. His ability to operate across C#, C, and Rust in a single project was impressive.",
      name: "Senior Engineer",
      title: "Azure Front Door Team",
      company: "Microsoft",
    },
  ];

  const stats = [
    { label: "Research Papers", value: 3, icon: "description" },
    { label: "Cumulative GPA", value: 4.0, decimal: true, icon: "school" },
    { label: "Languages", value: 8, suffix: "+", icon: "code" },
    { label: "Projects Shipped", value: 15, suffix: "+", icon: "rocket_launch" },
    { label: "Internships", value: 3, icon: "work" },
  ];

  const interests = [
    {
      title: "Competitive Swimming",
      description: "Rose-Hulman DIII Varsity Athlete — Swim & Dive team",
      icon: "pool",
      color: "#4fc3f7",
    },
    {
      title: "Piano",
      description: "Classically trained with years of lessons",
      icon: "piano",
      color: "#ce93d8",
    },
    {
      title: "Guitar",
      description: "Acoustic & electric guitar player",
      icon: "music_note",
      color: "#ffab40",
    },
    {
      title: "Hiking",
      description: "Exploring trails and the outdoors",
      icon: "hiking",
      color: "#66bb6a",
    },
    {
      title: "Gym",
      description: "Strength training and consistent fitness routines",
      icon: "fitness_center",
      color: "#ef5350",
    },
    {
      title: "Traveling",
      description: "Exploring new places, cultures, and food",
      icon: "flight_takeoff",
      color: "#29b6f6",
    },
  ];

  const volunteering = [
    {
      role: "Varsity Swim & Dive Captain",
      organization: "Rose-Hulman",
      date: "2023 – 2025",
      description: "Led team practices, coordinated meets, and mentored underclassmen as DIII varsity team captain.",
      icon: "sports",
      color: "#4fc3f7",
    },
    {
      role: "Teaching Assistant",
      organization: "Rose-Hulman",
      date: "2024 – 2025",
      description: "TA for Data Structures & Algorithms and Design & Analysis of Algorithms. Guided 60+ students, held office hours, and graded assignments.",
      icon: "school",
      color: "#915EFF",
    },
    {
      role: "Rose-Hulman Buddy Program",
      organization: "Rose-Hulman",
      date: "2024 – 2025",
      description: "Paired with and mentored incoming freshmen joining Computer Science, helping them navigate coursework, campus life, and career planning.",
      icon: "group",
      color: "#00cea8",
    },    {
      role: "RISE/ESCALATE Entrepreneur Club",
      organization: "Rose-Hulman",
      date: "2023 \u2013 2024",
      description: "Member of the entrepreneurship club focused on developing business ideas, pitching solutions, and collaborating across disciplines.",
      icon: "lightbulb",
      color: "#ffab40",
    },  ];

  export { services, technologies, experiences, researchprojects, projects, education, awards, skills, testimonials, stats, interests, volunteering };