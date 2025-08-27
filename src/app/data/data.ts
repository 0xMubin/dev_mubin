// =================================================================
// 🎯 PORTFOLIO CONFIGURATION FILE
// =================================================================
// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
// This is the ONLY file you need to edit to customize your entire portfolio!

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebook, FaLaravel, FaBootstrap, FaJava} from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiKotlin,
  SiBluetooth,
  SiSqlite,
  SiJson,
  SiOpenai,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { FaFlutter } from "react-icons/fa6";

// =================================================================
// 👤 PERSONAL INFORMATION
// =================================================================
export const personalInfo = {
  // Basic Information
  name: "Muntasir Mubin", // Your full name
  title: "Web Developer", // Your professional title
  tagline: "Crafting Beautiful & Functional Web Experiences", // Hero section tagline
  description:
    "Hi, I’m Muntasir Mubin — a passionate Web Developer from Bangladesh. I love building modern, user-friendly digital solutions that make people’s lives easier.", // Hero section description

  // Profile
  profileImage: "/img/profilepic.webp", // Your profile picture
  profileImageAlt: "Muntasir Mubin Profile Picture", // Alt text for profile image
  summary:
    "I am Muntasir Mubin, a passionate web developer, student, and entrepreneur. Founder & CEO of WebDextro LTD, always exploring technology, creating unique projects, and learning new skills.", // About section summary
  location: "Jashore, Bangladesh", // Your location

  // Professional Details
  availability: "Available for new projects", // Current availability status
  experience: "4+ years of experience", // Years of experience

  // Additional Info for SEO
  keywords: [
    "Muntasir Mubin", // Your name
    "Web Developer",
    "Laravel",
    "PHP",
    "Portfolio",
    "WebDextro",
    "TypeScript",
    "JavaScript",
  ],
};

// =================================================================
// 🌐 WEBSITE & SEO CONFIGURATION
// =================================================================
export const siteConfig = {
  // Website URLs
  siteUrl: "https://mubin.eu", // Your deployed website URL
  siteName: "Muntasir Mubin - Founder & CEO of WebDextro", // Site name for social sharing

  // SEO Description
  seoDescription:
    "Muntasir Mubin is the Founder & CEO of WebDextro Ltd, a distinguished Web & App development company based in the United Kingdom. With a strong passion for technology, he has established himself as a skilled Web & App Developer.",

  // Social Preview Image (Take a screenshot of your homepage and save as "preview.png" in public/img/)
  previewImage: "/img/preview.png",
};

// =================================================================
// 📧 CONTACT INFORMATION
// =================================================================
export const contactInfo = {
  email: "mubin@webdextro.org", // Your email address
  whatsappNumber: "8801329828872", // Your WhatsApp number (without + sign)
  whatsappMessage: "Hi! I'm interested in working with you. Can we chat?", // Default WhatsApp message

  // Web3Forms Access Key (Get it free from https://web3forms.com/)
  // Step 1: Go to https://web3forms.com/
  // Step 2: Click "Create your Access Key" and generate your free access key
  // Step 3: Copy and paste it below
  web3formsAccessKey: "2de6c072-f1d8-471a-94c9-1bbab9bb8658", // Replace with your actual Web3Forms access key
};

// =================================================================
// 🔗 SOCIAL LINKS
// =================================================================
export const socialLinks = {
  linkedin: "https://linkedin.com/in/mubiiin", // Your LinkedIn profile URL
  github: "https://github.com/0xMubin", // Your GitHub profile URL
  facebook: "https://www.facebook.com/mubin.web",
  resumeLink: "https://cv.mubin.eu/", // Google Drive link to your resume
};

// =================================================================\
// 🛠️ TECHNICAL SKILLS
// =================================================================
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "Java", icon: FaJava, color: "#040404ff" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

// =================================================================
// 🧭 NAVIGATION CONFIGURATION
// =================================================================
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};

export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
{
    name: "Facebook",
    type: "link",
    icon: FaFacebook,
    url: socialLinks.facebook,
    size: "18px",
  },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: socialLinks.linkedin,
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: socialLinks.github,
    size: "18px",
  },
];

// =================================================================
// 💼 PROJECT PORTFOLIO
// =================================================================
export const projects = [
{
  "name": "WebDextro LTD",
  "description": "A modern and professional website built for WebDextro LTD to showcase services, portfolio, and client support system.",
  "points": [
    "Fully responsive design with modern UI/UX.",
    "Service showcase and project portfolio integration.",
    "Client support system with contact form & ticketing."
  ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#83CD29" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#d42a93ff" },
    ],
    liveLink: "https://webdextro.org/",
    githubLink: "https://webdextro.org/",
    image: "/img/webdextro.png", // Update with the actual project image
  },
  {
  "name": "AmarCareer",
  "description": "1st AI Powered Job Portal in Bangladesh",
  "points": [
    "AI Job Finder",
    "City-Wise Job Finder",
    "Fully responsive design with modern UI/UX.",
    "Employee & Employer Panel.",
    
  ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "AI", icon: SiOpenai, color: "#ffffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#83CD29" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#d42a93ff" },
    ],
    liveLink: "https://amarcareer.com/",
    githubLink: "https://webdextro.org/projects/amarcareer",
    image: "/img/amarcareer.png", // Update with the actual project image
  },
  {
    name: "Foodiez Script",
    description: " Powerful Food Delivery System with PWA, WhatsApp Ordering & POS",
    points: [
      "Smart UI & User Features",
      "Powerful Admin Panel.",
      "Multiple Payment Gateway Support.",
      "Multi-Branch Management",
     ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#d42a93ff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#83CD29" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },

    ],
    liveLink: "https://foodiez.webdextro.org/",
    githubLink: "https://webdextro.org/projects/foodiez",
    image: "/img/foodiez.png", // Update with the actual project image
  },
{
  name: "GreenChat App", 
  description: "Offline Chatting System using Bluetooth System",
  points: [
    "Offline Messaging",
    "End to End Encrypted",
    "Group chats with unlimited members.",
    "Simple and clean user interface.",
    "Real-time notifications.",
  ],
    techStack: [
      { name: "Kotlin", icon: SiKotlin, color: "#61DAFB" },
      { name: "Bluetooth", icon: SiBluetooth, color: "#2465aaff" },
      { name: "SQLite", icon: SiSqlite, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
    
    ],
    liveLink: "https://0xmubin.github.io/greenchat.app/",
    githubLink: "https://webdextro.org/projects/greenchat",
    image: "/img/greenchat.png", // Update with the actual project image
  },
  {
    name: "AmarBangla app",
    description: "Description about sample project 3",
    points: [
      "Clean UI & UX.",
      "Secured Server",
      "Know More about Bangladesh.",
    
    ],
    techStack: [
      { name: "Java", icon: FaJava, color: "#f5f0f0ff" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: FaDatabase, color: "#36b447ff" },
      { name: "JSON", icon: SiJson, color: "#f1e9e9ff" },
      { name: "JavaScript", icon: SiJavascript, color: "#f1e9e9ff" },
    ],
    liveLink: "#",
    githubLink: "https://webdextro.org/projects/amarbangla",
    image: "/img/amarbangla.png", // Update with the actual project image
  },
  {
    name: "Bazaar Script",
    description: "eCommerce App with Laravel Website and Admin Panel.",
    points: [
      "Flutter App",
      "Powerful Admin Panel",
      "Point of Sale (POS)",
      "Clean UI-UX",
    ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "Flutter", icon: FaFlutter, color: "#13b0e5ff" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },

    ],
    liveLink: "#",
    githubLink: "https://webdextro.org/projects/bazaar",
    image: "/img/bazaar.png", // Update with the actual project image
  },
   {
    name: "Bidyaloy Script",
    description: "School Management Software and Website PHP Script.",
    points: [
      "Student, Teacher, Parent Panel",
      "Powerful Admin Interface",
      "Clean UI-UX",
      "More..",
    ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },

    ],
    liveLink: "#",
    githubLink: "https://webdextro.org/projects/bidyaloy",
    image: "/img/bidyaloy.png", // Update with the actual project image
  },
    {
  "name": "CyberAid",
  "description": "A Discontinued Non-Profit CyberSecurity Helper by WebDextro LTD",
  "points": [
    "Get Secured Online",
    "CyberSecuriy Advice",
    "Regain Access to own Content",
    "Remove Your Personal Things From Internet",
    
  ],
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#ee3e0dff" },
      { name: "PHP", icon: FaPhp, color: "#61DAFB" },
      { name: "AI", icon: SiOpenai, color: "#ffffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#38B2AC" },
      { name: "MySQL", icon: FaDatabase, color: "#83CD29" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#83CD29" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#d42a93ff" },
    ],
    liveLink: "https://webdextro.org/",
    githubLink: "https://webdextro.org/projects/cyberaid",
    image: "/img/cyberaid.png", // Update with the actual project image
  },

];

// =================================================================
// 🎓 EDUCATION INFORMATION
// =================================================================
export const education = {
  institution: "Jashore Education Board",
  degree: "Higher School Certificate",
  cgpa: "X.XX",
  duration: "2024 - 2025",
  location: "Jashore, Bangladesh",
};

// =================================================================
// 💼 WORK EXPERIENCE
// =================================================================
export const experience = {
  companyName: "WebDextro LTD",
  position: "Chief Excecutive Officer",
  duration: "Jan 2024 - Present",
  location: "Remote",
  achievements: [
    "Developed a key feature that improved user engagement by 40%",
    "Collaborated with cross-functional teams to enhance UI/UX design",
    "Fixed critical bugs and optimized performance, reducing load time by 25%",
    "Mentored junior developers and contributed to code review processes",
  ],
};

// =================================================================
// 📝 ADDITIONAL CONFIGURATION
// =================================================================

// Copyright year (automatically uses current year)
export const currentYear = new Date().getFullYear();
