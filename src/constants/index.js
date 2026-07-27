import mililani from '../assets/mililani.png';
import rosehulman from '../assets/rosehulman.png';
import auction from '../assets/projects/Auction.png';
import clientprototyping from '../assets/projects/ClientPrototyping2.PNG';
import computerprocessor from '../assets/projects/ComputerProcessor.png';
import criticalityscore from '../assets/projects/criticalityscore.png';
import editortrees from '../assets/projects/EditorTree.png';
import indiana211 from '../assets/projects/Indiana211Website.png';
import lb from '../assets/projects/lb.png';
import linter from '../assets/projects/Linter.png';
import myopathy from '../assets/projects/Myopathy.png';
import plearn from '../assets/projects/plearn.png';
import pneu from '../assets/projects/pneu.png';
import poker from '../assets/projects/Poker.png';
import portfolio from '../assets/projects/Portfolio.png';
import rustascii from '../assets/projects/rustascii.png';
import sunsetsails from '../assets/projects/sunsetsailwebsite.png';
import swimdata from '../assets/projects/SwimData.png';
import swimming from '../assets/projects/SwimmingDatabase.png';
import xv6threads from '../assets/projects/xv6threads.png';

// Re-export data constants
export * from './data';
  
  const education = [
    {
    titlefront: "Bachelor of Science, Computer Science",
        school: "Rose-Hulman Institute of Technology",
        iconfront: rosehulman,
        date: "August 2022 - May 2025",
        points: [
      "Deep Learning",
                "Image Recognition",
      "Artificial Intelligence",
      "Generative AI",
      "Linear Algebra",
      "Probability & Statistics",
      "Combinatorics",
      "Data Mining",
      "Computer Networks",
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
  
  const researchprojects = [
    {
      title: "Parsons Blocks: Effective Teaching Questions",
      description:
        ["Used Parsons Blocks to identify 10+ student misconceptions and reduce average homework time by 28%",
          "Increased average exam scores by 7% by building a Python and Java ETL pipeline to collect, analyze, and visualize problem-set data",
          "Ranked edit distance and longest common subsequence methods with machine learning to measure distance from correct answers"],
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
      date: "March 2023 - February 2025",
    },
    {
      title: "Criticality Score Algorithm",
      description:
        ["Retained 98% of the criticality algorithm's performance using only 5 features with machine learning in Python and R",
        "Improved identification of the most significant open-source projects for the Open Source Security Foundation",
        "Presented at the NDiSTEM Conference in Portland, Oregon with a travel scholarship"],
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
      date: "June 2023 - August 2023",
    },
    {
      title: "High Accuracy Classification of Myopathy",
      description:
        ["Won 3rd Place Grand Award in Bioinformatics at the Regeneron International Science and Engineering Fair (ISEF)",
          "Classified myopathy EMG images with 96.57% accuracy using a deep neural network in Python and MATLAB"],
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
      date: "April 2020 - September 2020",
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
      color: "#915EFF",
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

  const testimonials = [
    {
      quote: "You're a very strong engineer and a fast learner — you took Traffic Replayer from a very early POC stage and turned it into something that looks and feels like a production-ready service, which is not easy. What stands out most is your ability to operate independently, while knowing when to reach out for help and when to help others, which makes you very effective in a team setting.",
      highlights: ["strong engineer", "fast learner", "production-ready service", "operate independently", "very effective in a team setting"],
      name: "Vlad Polyakov",
      title: "Principal Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/vladislavp/",
    },
    {
      quote: "When we worked together on the new config test framework for Roxy, I really appreciated the way you took ownership over critical work items — I felt like you're someone I could rely on. You weren't simply trying to get a task done but looked for ways to expand it so the result delivers more value to the team. Your final result was very polished and performed way beyond the initial idea we had.",
      highlights: ["took ownership over critical work items", "someone I could rely on", "more value to the team", "very polished and performed way beyond"],
      name: "Damir Ferizovic",
      title: "Senior Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/damirferizovic/",
    },
    {
      quote: "One of the most driven students I've mentored. Blaise's work on Parson's Problems showed both strong engineering skills and a genuine curiosity for understanding how students learn — a rare combination.",
      highlights: ["most driven students", "strong engineering skills", "genuine curiosity"],
      name: "Dr. Joseph Hollingsworth",
      title: "Professor, Computer Science",
      company: "Rose-Hulman Institute of Technology",
      linkedin: "https://www.linkedin.com/in/drholly/",
    },
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
      color: "#a78bfa",
    },
    {
      title: "Guitar",
      description: "Acoustic & electric guitar player",
      icon: "music_note",
      color: "#00cea8",
    },
    {
      title: "Gym",
      description: "Strength training and consistent fitness routines",
      icon: "fitness_center",
      color: "#c471ed",
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
      color: "#c471ed",
    },  ];

  export { researchprojects, projects, education, awards, testimonials, interests, volunteering };