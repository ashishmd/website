"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    period: "June 2022 - Present (3+ years)",
    title: "Tech Lead & Senior Software Engineer (SDE3/ZP3)",
    company: "Zoom",
    location: "Remote",
    highlights: [
      "Leading a team of engineers as Tech Lead, driving architectural decisions and technical strategy for Ecosystem and WFM teams. Recognized as Q3 Top Performer for application scalability improvements.",
      "Zoom Certified Security Champion Plus — performing security reviews, data classification reviews, and driving team-wide security practices including threat modeling.",
      "Achieved 30x performance improvement in a critical real-time event processing pipeline (2.5 hours → 5 minutes for 30K events) and 50x gains through architectural optimization on integration platforms.",
      "Led database performance initiative: 70% CPU reduction, DB instance downsizing, and significant cost savings through schema restructuring, 15+ slow query fixes, and data archival of millions of rows.",
      "Pioneered AI-enhanced development workflows (Cursor AI), reducing end-to-end delivery time by 40–50% while maintaining near-zero bug rate. Trained the team on AI-powered development practices.",
      "Led Blue Green Deployment adoption — trained and guided the team through the first and second Blue Green deployments, improving deployment reliability and reducing risk.",
      "Owned a major product release end-to-end, coordinating with Operations and ensuring zero production impact during deployment.",
      "Delivered multiple full-stack features end-to-end across scheduling, reporting, and localization modules, demonstrating full-stack ownership from PRD through production.",
      "Reduced historical data import time by 95% (from minutes to 80 seconds) for 50MB files using stream processing architecture.",
      "Resolved critical system outages including OOM crashes, high-latency errors, and process crashes. Volunteered for overnight debugging sessions to ensure successful deployments.",
      "Led architecture and implementation of Node.js/Next.js microservices and Java/Spring Boot integration platforms with reverse-proxy auth and PKCE, reducing integration complexity by 40%.",
      "Organizer of bi-weekly Technical Thursdays since 2023 — sessions on deployment strategies, message queue architectures, Node.js internals, MySQL best practices, and performance optimization.",
      "Reduced onboarding time for new team members by 1–2 weeks through comprehensive documentation, mentorship, and hands-on guidance in transitioning from Java to Node.js.",
    ],
  },
  {
    period: "Nov 2020 - May 2022 (1 year 7 months)",
    title: "Fullstack Senior Software Developer",
    company: "Freshworks Inc.",
    location: "Chennai",
    highlights: [
      "Served as Squad Lead, Scrum Master, and Mentor, driving team efficiency and growth.",
      "Collaborated with the Product team to design solutions for a highly scalable product using Ruby on Rails and EmberJS.",
      "Proficiently triaged and debugged technical support requests, and minimized ticket influx by optimizing affected areas.",
      "Championed clean code, TDD, and proactive knowledge sharing within the team.",
    ],
  },
  {
    period: "June 2018 - Oct 2020 (2 years 5 months)",
    title: "Fullstack Software Developer",
    company: "Freshworks Inc.",
    location: "Chennai",
    highlights: [
      "Developed and maintained features for a SaaS product using Ruby on Rails and EmberJS.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in code reviews and contributed to improving development processes.",
    ],
  },
  {
    period: "July 2016 - May 2018 (1 year 11 months)",
    title: "Software Developer",
    company: "Zoho",
    location: "Chennai",
    highlights: [
      "Developed enterprise applications using Java and related technologies.",
      "Worked on multiple client projects delivering solutions on time.",
      "Gained experience in full software development lifecycle.",
    ],
  },
];

const INITIAL_VISIBLE = 5;

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.highlights.length > INITIAL_VISIBLE;
  const visibleHighlights = expanded ? exp.highlights : exp.highlights.slice(0, INITIAL_VISIBLE);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-12 md:grid md:grid-cols-2 md:gap-8 ${
        index % 2 === 0 ? "" : "md:grid-flow-dense"
      }`}
    >
      <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>

      <div
        className={`ml-16 md:ml-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 ${
          index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-semibold">{exp.period}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {exp.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Briefcase className="w-4 h-4" />
          <span className="font-medium">{exp.company}</span>
          <span>•</span>
          <span>{exp.location}</span>
        </div>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {visibleHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {exp.highlights.length - INITIAL_VISIBLE} more
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding scroll-mt-20 bg-white dark:bg-gray-900"
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
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            This timeline provides an overview of my career, showcasing my
            progression through various roles and responsibilities.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
