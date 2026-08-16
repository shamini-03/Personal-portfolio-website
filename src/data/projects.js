export const projects = [
  {
    id: "01",
    title: "Task Flow Management System",
    category: "Full-Stack Web Application",
    description: "A collaborative project and task-management platform designed to help teams create, assign, monitor and complete work efficiently.",
    problem: "Teams often struggle to track tasks across different roles, lacking real-time visibility and clear priority assignment.",
    solution: "Built a secure, role-based Kanban platform with real-time notifications to streamline team collaboration.",
    features: [
      "Role-based access control",
      "Admin, Project Manager and Collaborator roles",
      "Secure authentication",
      "Task creation and assignment",
      "Priorities and deadlines",
      "Kanban board",
      "Task-status monitoring",
      "Real-time notifications",
      "User management",
      "Password reset"
    ],
    contribution: ["Frontend development", "Interface implementation", "System integration"],
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Socket.IO", "Docker", "AWS"],
    image: `${import.meta.env.BASE_URL}assets/Task managemnt.jpeg`,
    githubUrl: "https://github.com/Shamini-03/Task-Management-System", // Placed actual repo link based on context if this is the one
    liveUrl: "", // EDIT: Add live demo link if applicable
    accentColor: "indigo"
  },
  {
    id: "02",
    title: "Switch Mate Smart Bulb Holder",
    category: "IoT Product / Product Innovation",
    description: "A Wi-Fi-enabled smart bulb holder designed to make existing lighting more convenient, controllable and energy-conscious. Tagline: Light Smarter. Live Better.",
    problem: "Existing lighting systems lack automation, scheduling, and easy smart control without replacing all bulbs.",
    solution: "Designed a smart bulb holder that integrates with any existing bulb, providing smart features via Wi-Fi.",
    features: [
      "Anywhere Control",
      "SleepShield",
      "BuzzGuard",
      "Scheduler",
      "FamilyShare",
      "LightSync"
    ],
    contribution: ["Product planning", "Feature definition", "Supplier analysis", "Presentation preparation", "Marketing-material development"],
    technologies: ["IoT", "Hardware", "Product Design", "Wi-Fi"],
    image: `${import.meta.env.BASE_URL}assets/projects/switch-mate.png`,
    githubUrl: "",
    liveUrl: "",
    accentColor: "electric", // Special accent for this project
    achievement: "Presented successfully at INCO 12.0."
  },
  {
    id: "03",
    title: "Power BI Sales Dashboard",
    category: "Data Analytics / Business Intelligence",
    description: "An interactive two-page Power BI dashboard created using the AdventureWorks dataset to support executive and financial decision-making.",
    problem: "Complex sales and financial data make it difficult for executives to quickly grasp performance metrics.",
    solution: "Developed an interactive dashboard providing clear visual insights into executive summaries and financial deep dives.",
    features: [
      "Executive Dashboard",
      "Financial Deep Dive",
      "Interactive filtering",
      "Trend analysis"
    ],
    contribution: ["Data modelling", "Dashboard design", "DAX implementation"],
    technologies: ["Power BI", "Excel", "DAX", "Data Modelling"],
    image: `${import.meta.env.BASE_URL}assets/power BI.jpeg`,
    githubUrl: "",
    liveUrl: "",
    accentColor: "teal"
  },
];
