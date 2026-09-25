import { Intent } from "./models/intent";

export const projects = [
    {
        images: ["thesis-2.jpg", "thesis-1.jpg"],
        title: "AI-Powered Smart Bin",
        features: [
        "Automatically classifies waste (paper, plastic, plastic bottles, others) using a trained YOLOv8 model",
        "Segregates waste and opens the lid automatically via servo motors",
        "Provides real-time fill level monitoring and alerts via a React Native mobile app and LED light indicators",
        "Compresses waste (paper, plastic) automatically using air compression",
        ],
        frameworks: ["React Native", "YOLOv8", "Arduino"],
        languages: ["Python", "TypeScript", "C++"],
        link: "",
    },
    {
        images: ["web1-1.jpg", "web1-2.jpg", "web1-3.jpg", "web1-4.jpg"],
        title: "Property, Plant, Equipment (PPE) Management System",
        features: [
        "Dashboard with real-time statistics and Chart.js pie charts for asset distribution",
        "Fund cluster management — separate views for Regular and Split clusters with search, filtering, and pagination",
        "Full CRUD operations with transactional database writes and personnel linking",
        "OTP-based password recovery with time-limited codes sent via Gmail SMTP",
        "CSV export for asset inventory reports per fund cluster",
        ],
        frameworks: ["PHPMailer", "Tailwind CSS", "Chart.js", "Docker"],
        languages: ["PHP", "SQL", "JavaScript"],
    },
    {
        images: ["kanban_2.jpg", "kanban_3.jpg", "kanban_1.jpg"],
        title: "Kanban Board",
        features: [
        "Organizes tasks across To Do, Doing, and Done columns with quick status transition capabilities.",
        "Supports project metadata, interactive subtask checklists, and an inline editing modal for flexible task updates.",
        "Provides instant keyword searching alongside dynamic dropdowns for priority, month, and day filters."
        ],
        frameworks: ["NextJs", "Flask"],
        languages: ["Typescript", "Python"],
        link: "https://github.com/Jeydeee04/Kanban-Board",
    }
]

export const skills = [
    {
        title: "Web Development",
        desc: "Full-stack web apps using React, Next.js, PHP, and Tailwind CSS."
    },
    {
        title: "Mobile App Development",
        desc: "Cross-platform mobile apps with React Native and real-time features."
    },
    {
        title: "AI & Machine Learning",
        desc: "Image classification and smart systems using YOLOv8, PyTorch, and TensorFlow."
    },
    {
        title: "Database Design",
        desc: "Structured data architecture with MySQL, MongoDB, Firebase, and SQLite."
    },
    {
        title: "API Development",
        desc: "RESTful APIs and backend services with PHP and Node.js."
    },
    {
        title: "DevOps & Deployment",
        desc: "Docker containerization, CI/CD pipelines, and cloud deployment via Vercel."
    }
]

export const intents: Intent[] = [
  // ---------------------------------------------------------------------------
  // 1. CONCEPTUAL / EXPLANATORY INTENTS (Checked first for "What is X" queries)
  // ---------------------------------------------------------------------------
  {
    id: "explain_kanban",
    category: "Concepts",
    groups: [
      ["kanban", "kanban board", "kanban methodology"],
      ["what", "explain", "meaning", "definition", "how it works", "concept"]
    ],
    response: "Kanban is a visual workflow management framework used to visualize work, limit work-in-progress (WIP), and maximize efficiency. Tasks are organized across columns typically 'To Do', 'Doing', and 'Done'. John built a full-stack Kanban Board app using Next.js and Flask!"
  },
  {
    id: "explain_yolo",
    category: "Concepts",
    groups: [
      ["yolo", "yolov8", "yolov11"],
      ["what", "explain", "meaning", "definition", "how it works", "concept"]
    ],
    response: "YOLO (You Only Look Once) is an ultra-fast, real-time object detection neural network that predicts bounding boxes and class probabilities in a single evaluation. John used YOLOv8 and YOLOv11 for his AI Smart Bin thesis project."
  },
  {
    id: "explain_modbus",
    category: "Concepts",
    groups: [
      ["modbus", "rs485", "rtu"],
      ["what", "explain", "meaning", "definition", "how it works", "concept"]
    ],
    response: "Modbus RTU over RS485 is an industrial serial communication protocol widely used to connect sensors and controllers over long distances with high noise immunity. John integrated RS485 Modbus RTU sensors with microcontrollers in hardware projects."
  },

  // ---------------------------------------------------------------------------
  // 2. PROJECT-SPECIFIC INTENTS
  // ---------------------------------------------------------------------------
  {
    id: "all_projects",
    category: "Projects",
    groups: [
      ["projects", "portfolio", "built", "created", "developed", "works"],
      ["what", "list", "show", "tell", "recent", "experience", "all", "your"]
    ],
    response: "John has built several full-stack and hardware projects, including an AI-Powered Smart Bin using YOLOv8 and Arduino, an asset management system for DAR using PHP and Docker, and a full-stack Kanban Board built with Next.js and Flask."
  },
  {
    id: "project_smart_bin",
    category: "Projects",
    groups: [
      ["smart bin", "trash", "segregation", "garbage", "thesis project", "waste bin"],
      ["project", "ai", "hardware", "compression", "pneumatics", "servo", "recycling", "built", "work"]
    ],
    response: "The AI-Powered Smart Bin automatically classifies waste using YOLOv8, segregates it using servo motors, compresses paper/plastic using pneumatic air compression, and monitors fill levels via a React Native app."
  },
  {
    id: "project_ppe_system",
    category: "Projects",
    groups: [
      ["ppe", "property plant equipment", "asset management", "inventory system", "dar system"],
      ["system", "management", "php", "fund cluster", "docker", "phpmailer", "built", "project"]
    ],
    response: "The Property, Plant, Equipment (PPE) Management System was built for DAR to track assets per fund cluster. It features Chart.js analytics, full CRUD operations, transactional database writes, CSV exports, and OTP password recovery via Gmail SMTP."
  },
  {
    id: "project_kanban",
    category: "Projects",
    groups: [
      ["kanban board app", "kanban project", "kanban app", "task management app"],
      ["project", "built", "nextjs", "flask", "typescript", "python", "github", "stack"]
    ],
    response: "John's Kanban Board is a full-stack task management web app built with Next.js and Flask. It features To Do/Doing/Done status transitions, subtask checklists, inline modal editing, keyword search, and multi-parameter filtering."
  },

  // ---------------------------------------------------------------------------
  // 3. PROFILE, SKILLS & HARDWARE INTENTS
  // ---------------------------------------------------------------------------
  {
    id: "profile",
    category: "Profile & Bio",
    groups: [
      ["who", "about", "bio", "background", "intro", "john", "gonzales", "engineer", "myself"],
      ["are you", "is john", "tell me", "summary", "profile"]
    ],
    response: "John Dominique L. Gonzales is a Computer Engineer specializing in full-stack web/mobile development, embedded systems, and computer vision. He is a Civil Service Professional passer and multi-time programming contest winner."
  },
  {
    id: "frontend_skills",
    category: "Frontend & Mobile Stack",
    groups: [
      ["frontend", "mobile", "ui", "web dev", "app dev"],
      ["tech", "stack", "skills", "framework", "tools", "react", "next", "tailwind", "expo", "typescript"]
    ],
    response: "For frontend & mobile development, John specializes in React, React Native, Expo, Next.js (App Router), TypeScript, and Tailwind CSS."
  },
  {
    id: "backend_skills",
    category: "Backend & API Stack",
    groups: [
      ["backend", "api", "server", "database", "backend dev"],
      ["tech", "stack", "skills", "tools", "node", "express", "fastapi", "flask", "firebase"]
    ],
    response: "On the backend, John builds RESTful APIs and asynchronous services using Node.js, Express.js, FastAPI, Flask, and Firebase."
  },
  {
    id: "hardware_skills",
    category: "Embedded & Hardware",
    groups: [
      ["hardware", "iot", "embedded", "sensors", "microcontroller", "robotics"],
      ["tech", "stack", "skills", "raspberry", "arduino", "modbus", "rs485", "pneumatics"]
    ],
    response: "For hardware and embedded systems, John engineers custom systems using Raspberry Pi 4B, Arduino Mega 2560, RS485 Modbus RTU soil sensors, ultrasonic sensors, and pneumatic actuators."
  },
  {
    id: "ai_skills",
    category: "AI & Computer Vision",
    groups: [
      ["ai", "ml", "machine learning", "computer vision", "vision stack"],
      ["tech", "stack", "skills", "tools", "pytorch", "opencv", "yolo", "reinforcement"]
    ],
    response: "John's computer vision and ML stack includes PyTorch, YOLOv8, YOLOv11, OpenCV, and Stable-Baselines3 for real-time object detection and classification pipelines."
  },
  {
    id: "general_skills",
    category: "General Tech Stack",
    groups: [
      ["skills", "stack", "tech", "technologies", "languages", "tools"],
      ["what", "list", "show", "my", "your", "overall"]
    ],
    response: "John's technical stack spans three core pillars:\n• Web/Mobile: React, React Native, Next.js, Tailwind, Node.js, FastAPI, Firebase\n• Embedded Systems: Raspberry Pi, Arduino, Modbus RS485, Ultrasonic sensors, Pneumatics\n• AI/Vision: PyTorch, YOLOv8/v11, OpenCV"
  },
  {
    id: "thesis_project",
    category: "Thesis Project",
    groups: [
      ["thesis", "capstone", "undergrad project"],
      ["what", "about", "title", "award", "smart bin", "details"]
    ],
    response: "John's capstone thesis was an Automated Smart Waste Segregation System featuring neural network image classification (YOLOv8), pneumatic compression, and mobile monitoring. It earned 2nd Place for Best Thesis at Marinduque State University!"
  },
  {
    id: "awards_education",
    category: "Awards & Credentials",
    groups: [
      ["awards", "achievements", "competition", "contest", "c++", "rank", "civil service", "degree", "university", "education", "school"]
    ],
    response: "Credentials & Awards:\n• 1st Place (Champion) - 2025 C++ Regional Programming Competition\n• 2nd Place - 2026 C++ Regional Programming Competition\n• 11th Place - 2025 C++ National Programming Competition\n• 2nd Place - Best Thesis (Automated Smart Bin)\n• Certified Passer - Civil Service Professional Exam\n• Degree: BS in Computer Engineering (Marinduque State University)"
  },
  {
    id: "contact_socials",
    category: "Contact & Links",
    groups: [
      ["contact", "email", "reach", "hire", "github", "facebook", "fb", "social", "message", "linkedin"]
    ],
    response: "Let's connect!\n• Email: johndominique.gonzales@gmail.com\n• GitHub: github.com/Jeydeee04\n• Facebook: facebook.com/john.dominique.gonzales.2024\n• Location: Marinduque, Philippines"
  },
  {
    id: "greetings",
    category: "Greetings",
    groups: [
      ["hi", "hello", "hey", "greetings", "sup", "yo", "good morning", "good evening"]
    ],
    response: "Hello! I'm John's AI portfolio assistant. Ask me about his tech stack, thesis project, C++ programming awards, or contact details!"
  }
];