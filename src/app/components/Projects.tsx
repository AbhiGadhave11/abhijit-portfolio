"use client";
import Section from "./Section";
import Image from "next/image";
import { motion } from "framer-motion";
import personaai  from "@/app/public/Images/Project/persona-ai_resized.png"
import portfolio from "@/app/public/Images/Project/portfolio_resized.png"
import courseRegi from "@/app/public/Images/Project/project3.png"
import pythonScript from "@/app/public/Images/Project/project2.png"

const projects = [
  {
    title: "Persona AI",
    description:
      "Custom-built chatbot using React.js Node.js, Express.js, OpenAI API.",
    image: personaai.src, 
    link: "https://persona-ai-ro5l.onrender.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind, and Framer Motion for animations.",
    image: portfolio.src,
    link: "https://github.com/abhijit/portfolio",
  },
  {
    title: "Course Registration System",
    description:
      "Developed a course management system using Node.js and MySQL, enabling students to enroll in tuition courses with backend data handling.",
    image: courseRegi.src,
    link: "https://github.com/AbhiGadhave11/Course-Registration-System",
  },
  {
    title: "Process Monitor Automation",
    description:
      "Built Python automation scripts (procedural) to list and monitor all active system processes.",
    image: pythonScript.src,
    link: "https://github.com/AbhiGadhave11/Process_Monitor_Automation_Script",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="WORK">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="p-6 border rounded-2xl shadow-sm bg-white dark:bg-gray-900 
                       hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            {/* Image with animation */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl mb-4 group-hover:brightness-110 transition-all duration-300"
              />
            </motion.div>

            {/* Text content */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

