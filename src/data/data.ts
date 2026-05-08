import {
  Project,
  SkillGroup,
  EducationItem,
  SocialLink,
  NavLink,
  Stats
} from "../types";

export const aboutMeData = {
  name: "Udit Bisht",
  title: "Backend Developer",
  description:
    "Computer Science student focused on backend engineering, scalable systems, and problem solving through Data Structures & Algorithms. Passionate about building clean architectures, practical applications, and continuously improving through hands-on development.",
  shortDescription:
    "Backend-focused developer building scalable systems and modern web applications."
};

export const projects: Project[] = [
  {
    id: 1,
    title: "FixedHack",
    description:
      "Designed REST APIs and backend logic for a hackathon discovery platform with scalable data handling and modern UI integration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    github: "https://github.com/Fire-ash/fixedhack",
    demo: "https://fixedhack.netlify.app/",
    featured: true,
    status: "Featured Project"
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built using React, Tailwind, and Framer Motion with smooth interactions and animated UI sections.",
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion"
    ],
    github: "https://github.com/Fire-ash/portfolio",
    demo: "https://your-vercel-link.vercel.app",
    status: "Live"
  },

  {
    id: 3,
    title: "Guess Command Line Game",
    description:
      "CLI-based Java application focused on control flow, input handling, and logic-building fundamentals.",
    technologies: [
      "Java",
      "CLI"
    ],
    github:
      "https://github.com/Fire-ash/Guess-CommandLineApplication",
    status: "Open Source"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "SQL"
    ]
  },

  {
    title: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "Vite"
    ]
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot"
    ]
  },

  {
    title: "Tools & Concepts",
    skills: [
      "Git",
      "Linux",
      "REST APIs",
      "DSA"
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Your College Name",
    duration: "2022 — 2026",
    description:
      "Focused on backend systems, operating systems, algorithms, databases, and scalable application development."
  },

  {
    degree: "Senior Secondary Education",
    institution: "Your School Name",
    duration: "2020 — 2022",
    description:
      "Studied Physics, Chemistry, and Mathematics with strong analytical and logical problem-solving foundations."
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Fire-ash"
  },

  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile"
  },

  {
    platform: "Email",
    url: "mailto:youremail@example.com"
  }
];

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "#about"
  },

  {
    label: "Skills",
    href: "#skills"
  },

  {
    label: "Projects",
    href: "#projects"
  },

  {
    label: "Education",
    href: "#education"
  },

  {
    label: "Contact",
    href: "#contact"
  }
];

export const stats: Stats[] = [
  {
    label: "LeetCode Problems",
    value: "130+"
  },

  {
    label: "Projects Built",
    value: "3+"
  },

  {
    label: "Tech Stack",
    value: "Modern Web"
  }
];
