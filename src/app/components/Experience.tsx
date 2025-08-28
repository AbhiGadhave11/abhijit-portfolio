'use client'

import { motion } from "framer-motion";
import Section from "./Section";

const experiences = [
  {
    company: "Onshape (PTC)",
    role: "Associate Software Engineer",
    period: "July 2024 - Present",
    description: [
      "I work in the Assemblies Team at Onshape, a SaaS-based CAD platform. My role involves developing and enhancing features that improve user experiences in designing and managing assemblies within the platform, leveraging cloud technology to deliver powerful CAD tools.",
      "Improved design and assembly management in Onshape, the first cloud-based CAD platform, by enhancing core features using Angular, Java, C++, and RxJS, resulting in better user experience and system efficiency.",
      "Led the folder restructuring feature, collaborating with the UI team to design Angular dialogs and implementing DFS and Topological Sorting, which boosted user productivity by 30%.",
      "Collaborated with the Architecture team to optimize performance of retrieval tests, reducing failure analysis and resolution time by 40% for developers.",
      "Designed and implemented the Implicit Custom Coordinate System for assembly patterns, handling edge cases with RxJS, and improving user productivity by 20–30%.",
      "Built and maintained end-to-end automation tests using Protractor, improving test coverage and reliability, ensuring faster and safer feature deployments.",
    ]
    //   "Implemented features like Implicit Mate Connector and optimized assembly workflows, improving productivity by 20-30%. Collaborated with UX/UI team and applied recursion & dynamic programming for restructuring assemblies.",
  },
  {
    company: "Onshape (PTC)",
    role: "Software Engineer Intern",
    period: "July 2023 - June 2024",
    description: [
      "Designed and implemented a real-time dialog interface using WebSocket, reducing client-server communication latency by 60% and enabling instant updates for over 1,000 concurrent users.",
      "Resolved several customer-reported bugs, leading to a 25% increase in feature accuracy and a 40% reduction in user-reported issues, directly boosting customer satisfaction scores.",
      "Developed a customizable coordinate system within the CAD platform, empowering users to edit coordinates via an intuitive dialog—resulting in a 35% faster workflow for design modifications and a 20% increase in user adoption.",
    ],
  },
  {
    company: "PCCOE",
    role: "Teaching Assistant",
    period: "Aug 2023 - Dec 2023",
    description: [
      ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Career Journey">
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md group-hover:scale-110 transition-transform"></div>

            {/* Experience card */}
            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.company}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {exp.role}
              </p>
              <span className="text-sm text-gray-500">{exp.period}</span>
              {/* Description as bullet points */}
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
