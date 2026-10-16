"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";

// Mirrors the résumé (public/Ashish-Muralidharan.pdf). Current-employer
// details are kept generic: no internal product, team, or customer names.
const experiences = [
  {
    period: "June 2022 - Present (4+ years)",
    title: "Senior Software Engineer",
    company: "Zoom",
    location: "Remote",
    highlights: [
      "Tech lead for a team of 13 engineers, owning architecture decisions and technical strategy.",
      "Leading the architectural decoupling that replaces a third-party vendor tool with an in-house product. Architected its privacy-first AI pipeline with dynamic PII redaction and LLM routing across tiered models to optimize API cost.",
      "Built a high-performance LLM execution layer with Server-Sent Events for real-time token streaming and semantic caching to cut redundant API calls, plus observability dashboards for guardrails, token usage, and model telemetry.",
      "Coordinated across squads with a partner product team to build core features that unblocked onboarding for major enterprise customers.",
      "Designed a hot-warm-cold data-archival strategy and redesigned core tables, resolving 15+ complex queries with the team and taking database CPU from a constant 70–80% to 25–30%, enabling a smaller, cheaper instance.",
      "Delivered a 24× speedup in user-event processing by removing throughput bottlenecks: 30,000 events now process in under 5 minutes instead of 120.",
      "Led the foundational architecture of Java/Spring Boot and Node.js microservices, including a reverse-proxy authentication platform that delivered 21 enterprise integrations and was adopted by 5 product teams.",
      "Championed an AI-enhanced development workflow and its standards across the team, reducing end-to-end feature delivery time by 70% with a near-zero defect rate.",
      "Pioneered Blue-Green deployments across teams as Release Owner, delivering zero-downtime releases and upskilling peers on modern CI/CD.",
      "Security Champion Plus: enforcing security and data-classification standards, running threat modeling, and mentoring engineers on secure system design.",
      "Created and host Technical Thursdays, a biweekly engineering knowledge-sharing forum, since November 2022. Recognized as Q3 Top Performer.",
    ],
  },
  {
    period: "Nov 2020 - May 2022 (1 year 7 months)",
    title: "Fullstack Senior Software Developer",
    company: "Freshworks",
    location: "Chennai",
    highlights: [
      "Squad Lead and Scrum Master, driving technical roadmaps and working directly with Product Management to architect highly scalable web solutions in Ruby on Rails and EmberJS.",
      "Analyzed defect trends to triage and debug support requests, finding systemic bottlenecks and fixing the affected areas to permanently reduce support-ticket volume.",
      "Mentored junior engineers through pair programming and code reviews, upheld clean-code and TDD standards, and managed task delegation.",
    ],
  },
  {
    period: "June 2018 - Oct 2020 (2 years 5 months)",
    title: "Fullstack Software Developer",
    company: "Freshworks",
    location: "Chennai",
    highlights: [
      "Led the backend implementation of core CRM functionality in Freshsales, including highly available email integration features.",
      "Revamped and optimized legacy import/migration tools, significantly improving data-ingestion performance.",
      "Played a key role in the architectural integration of Segment into the Freshsales ecosystem, improving cross-platform data insights.",
    ],
  },
  {
    period: "May 2016 - May 2018 (2 years)",
    title: "Member Technical Staff",
    company: "Zoho Corporation",
    location: "Chennai",
    highlights: [
      "Built scalable REST APIs integrating accounting, invoicing, and taxation modules.",
      "Played a substantial backend role in building and launching Zoho's GST returns-filing platform for enterprises.",
      "Optimized complex MySQL queries to reduce latency, and built integrations between Zoho Books and AvaTax.",
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

        <ul
          id={`experience-highlights-${index}`}
          className="space-y-2 text-gray-700 dark:text-gray-300"
        >
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
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`experience-highlights-${index}`}
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
            10+ years across Zoom, Freshworks, and Zoho.
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
