import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {LuCodepen} from "react-icons/lu"
import dentmateImg from "@/public/Dentmate-image.png";
import nxtTrendzImg from "@/public/NxtTrendz.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Louisville,KY",
    description:
      "Developed and optimized a SaaS web app using React.js, Node.js, Express.js, MongoDB, and GraphQL to enhance system performance. Deployed serverless applications on AWS with Docker & Kubernetes for scalability and reliability. Implemented CI/CD pipelines, OAuth 2.0 security, and database optimizations to improve efficiency, security, and seamless integration of microservices",
    icon: React.createElement(LuCodepen),
    date: "2023 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Louisville, KY",
    description:
      "Engineered and implemented interactive SPAs using React.js, Next.js, Redux, and TypeScript, ensuring responsive, high-performance UIs. Integrated RESTful APIs, Redux, and Context API for efficient state management and dynamic data handling. Collaborated in an Agile environment, conducted testing with Jest, and deployed applications using Vercel, Netlify, and Git with secure authentication.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Chennai, TN",
    description:
      "Developed end-to-end industrial project management solutions using Python, Django, React.js, and PostgreSQL, ensuring seamless data management and API integration. Implemented AI-driven safety protocols with IoT cameras and sensors, enhancing workplace security and compliance. Engineered scalable cloud infrastructure on AWS, optimized system performance, and maintained CI/CD pipelines for efficient development and deployment",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Dentmate (Custom Mobile APP)",
    description:
      "Developed the Dentmate App, integrating QuickBooks, RESTful APIs, AngularJS components, and automation features to enhance PDR technicians' workflow.",
    tags: ["AngularJS", "NodeJS", "Next.js", "Wix", "Postman", "Sandbox"],
    imageUrl: dentmateImg,
  },
  {
    title: "Nxt Trendz",
    description:
      "Developed a responsive e-commerce app using React.js, JWT authentication, REST API integration, and React Context API for seamless cart management.",
    tags: ["ReactJS", "RESTful API's", "React Router DOM", "Docker", "Bootstrap", "JWT"],
    imageUrl: nxtTrendzImg,
  }

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "ASP.NET MVC",
  "ASP.NET Core",
  "C#",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MYSQL",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Git",
  "CI/CD pipelines",
  "OAuth 2.0",

] as const;
