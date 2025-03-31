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
    location: "Louisville, KY",
    description:
      "Developed and optimized a SaaS-based web application using Angular, C#, ASP.NET, and .NET Core, enhancing performance and improving API response time. Designed and deployed scalable, serverless applications on AWS (Lambda, EC2, S3, RDS) using Docker and Kubernetes, optimizing infrastructure costs while ensuring high availability.",
    icon: React.createElement(LuCodepen),
    date: "2024 - Present",
  },
  {
    title: "Graduate Assistant",
    location: "Louisville, KY",
    description:
      "Developed responsive, mobile-first web pages using HTML, CSS, JavaScript, Bootstrap, and Angular, enhancing UI performance and client-side efficiency. Designed and integrated C# .NET Core backend APIs, implemented JWT authentication, and deployed applications on Vercel/Netlify, ensuring scalability and seamless deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Software Engineer",
    location: "Chennai, TN",
    description:
      "Developed C#, ASP.NET Core, and .NET MVC applications using Razor Pages, optimizing PostgreSQL data handling and implementing Clean Architecture for maintainability. Built scalable cloud infrastructure on AWS, integrated ASP.NET Core Identity with JWT OAuth 2.0 for security, and automated CI/CD pipelines for seamless deployments.",
    icon: React.createElement(FaReact),
    date: "2020 - 2023",
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
