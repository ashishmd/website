"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Database Performance Optimization & Data Archival",
    company: "Zoom WFM",
    description:
      "Led a comprehensive database performance initiative including schema architecture restructuring, closure of 15+ slow query bugs, and a data-archival system that moved millions of rows from MySQL to cold storage. Achieved 70% CPU reduction, enabling DB instance downsizing and significant cost savings.",
    technologies: [
      "MySQL",
      "Prisma",
      "Node.js",
      "Kubernetes",
      "Monitoring",
      "ZFS",
    ],
    impact:
      "70% CPU reduction, DB instance downsized, millions of rows archived, significant cost savings",
    github: null,
    link: null,
  },
  {
    title: "Real-Time Event Processing — 30x Performance Improvement",
    company: "Zoom WFM",
    description:
      "Identified and resolved a critical performance bottleneck in a high-volume real-time event processing pipeline. Redesigned the architecture to handle 30K events in 5 minutes instead of 2.5 hours, demonstrating deep system understanding and ability to deliver enterprise-grade performance.",
    technologies: [
      "Node.js",
      "Performance Optimization",
      "Event Processing",
      "MySQL",
    ],
    impact:
      "30x performance improvement (2.5 hours → 5 minutes for 30K events)",
    github: null,
    link: null,
  },
  {
    title: "Third-Party Integration Platform (App-Connector)",
    company: "Zoom ZECO",
    description:
      "Led architecture and implementation of comprehensive App-connector services platform with reverse-proxy authentication system and framework model approach. Achieved 50x performance improvements, implemented PKCE for enhanced security, and created automated integration framework that reduced complexity by 40%.",
    technologies: [
      "Java",
      "Spring Boot",
      "OAuth 2.0",
      "PKCE",
      "Microservices",
      "Design Patterns",
      "CI/CD",
    ],
    impact:
      "50x performance improvement, 50% cost reduction, 40% complexity reduction",
    github: null,
    link: null,
  },
  {
    title: "AI-Enhanced Development Workflow & Full-Stack Delivery",
    company: "Zoom WFM",
    description:
      "Pioneered AI-enhanced development workflows using Cursor AI, delivering complete features end-to-end from PRD and tech-spec through code completion across scheduling, reporting, and localization modules. Trained the team to adopt AI-powered development practices.",
    technologies: [
      "Cursor AI",
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "Full-Stack",
    ],
    impact:
      "40–50% delivery time reduction, near-zero bug rate, team-wide AI adoption",
    github: null,
    link: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Key projects demonstrating technical expertise and measurable
            business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    {project.company}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Impact:
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {project.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
