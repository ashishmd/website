"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, GitBranch, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    skills: [
      "Java",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Ruby",
      "React",
      "Next.js",
      "Spring Boot",
      "EmberJS",
      "Express",
    ],
  },
  {
    icon: Database,
    title: "Databases & ORMs",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Connection Pool Optimization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "Monitoring & Alerting",
      "DevOps",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Monitoring",
    skills: [
      "Git",
      "Grafana",
      "Datadog",
      "Cube",
      "JIRA",
      "Confluence",
      "Postman",
      "Performance Profiling",
    ],
  },
  {
    icon: GitBranch,
    title: "Architecture & Design",
    skills: [
      "Microservices",
      "System Design",
      "RESTful APIs",
      "Data Ingestion Systems",
      "Queuing Systems",
      "Event-Driven Architecture",
      "Design Patterns",
      "Stream Processing",
    ],
  },
  {
    icon: Shield,
    title: "Security & Best Practices",
    skills: [
      "Security Champion",
      "Threat Modeling",
      "Vulnerability Assessment",
      "PKCE",
      "OAuth 2.0",
      "TDD",
      "Clean Code",
      "Code Reviews",
      "Agile/Scrum",
      "Performance Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-gray-600 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
