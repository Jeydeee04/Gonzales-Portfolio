export const projects = [
    {
        images: ["thesis-2.jpg", "thesis-1.jpg"],
        title: "AI-Powered Smart Bin",
        desc: "An AI-powered garbage bin that uses image classification to automatically classify and segregate waste in real-time. Built to make proper waste disposal effortless and accurate.",
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
        desc: "A web-based Property, Plant & Equipment (PPE) inventory management system built for the Department of Agrarian Reform (DAR). Manages the full lifecycle of government-owned assets across two fund clusters, providing real-time dashboard analytics, CRUD operations, status tracking, and CSV export.",
        features: [
        "Dashboard with real-time statistics and Chart.js pie charts for asset distribution",
        "Fund cluster management — separate views for Regular and Split clusters with search, filtering, and pagination",
        "Full CRUD operations with transactional database writes and personnel linking",
        "OTP-based password recovery with time-limited codes sent via Gmail SMTP",
        "CSV export for asset inventory reports per fund cluster",
        ],
        frameworks: ["PHPMailer", "Tailwind CSS", "Chart.js", "Docker"],
        languages: ["PHP", "SQL", "JavaScript"],
        link: "https://github.com/Jeydeee04/Student-Assistant-SPES-Project",
    },
    {
        images: ["kanban_2.jpg", "kanban_3.jpg", "kanban_1.jpg"],
        title: "Kanban Board",
        desc: "This Kanban board is a modern task manager designed to help you easily organize workflows, track progress, and filter tasks. It includes smart filters, column pagination, and persistent dark and light modes for a smooth and productive experience.",
        features: [
        "Organizes tasks across To Do, Doing, and Done columns with quick status transition capabilities.",
        "Supports project metadata, interactive subtask checklists, and an inline editing modal for flexible task updates.",
        "Provides instant keyword searching alongside dynamic dropdowns for priority, month, and day filters.",
        "Limits columns to five items per page with responsive navigation controls to prevent long vertical scrolling.",
        "Allows seamless switching between dark and light modes across the entire application with automatic saving via local storage.",
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