"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a graduate student from <span className="font-medium">University of Louisville</span>, where I pursued my {" "}
        <span className="font-medium">Master’s in Computer Science</span> with a strong focus on {" "}
        <span className="font-medium">full-stack web development, cloud computing, and security</span>.{" "} My academic journey has 
        provided me with a solid foundation in {" "} <span className="font-medium">software engineering principles, 
          data structures, and scalable application design.</span>{" "} Beyond my studies, I am passionate about {" "}
        <span className="italic">building innovative and efficient web applications that enhance user experiences.</span> I enjoy working with 
        modern technologies like 
        {" "}
        <span className="font-medium underline">
        ASP.NET Core, C#, React.js, Next.js, Node.js, and AWS.
        </span>{" "} I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
