"use client";
import Section from "./Section";
import { motion } from "framer-motion";

const education = [
  {
    school: "Pimpri Chinchwad College Of Engineering",
    degree: "B.Tech in Computer Science",
    year: "2020 - 2024",
  },
  {
    school: "Mudhoji Higher Secondary School",
    degree: "Higher Secondary (PCM)",
    year: "2018 - 2020",
  },
  {
    school: "Mudhoji High School",
    degree: "Secondary",
    year: "2012 - 2018",
  },
  {
    school: "Wai Municipal School No.5",
    degree: "Elementary",
    year: "2006 - 2012",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        className="grid gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="relative p-6 rounded-2xl shadow-lg 
              bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border 
              border-gray-200/30 dark:border-gray-700/30 
              hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Timeline accent line */}
            <div className="absolute left-0 top-6 h-12 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <h3 className="text-2xl font-bold ml-4">{edu.school}</h3>
            <p className="ml-4 text-gray-700 dark:text-gray-300">{edu.degree}</p>
            <span className="ml-4 text-sm text-gray-500">{edu.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

