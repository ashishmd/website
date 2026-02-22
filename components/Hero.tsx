"use client";

import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ashishmd", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ashishmuralidharan",
      label: "LinkedIn",
    },
    { icon: BookOpen, href: "https://ashishmd.medium.com", label: "Blog" },
    { icon: Mail, href: "mailto:emailme@ashishm.dev", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-custom px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Ashish Muralidharan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 gradient-text"
          >
            Tech Lead & Senior Software Engineer | System Design & Java/Node.js
            Specialist
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto space-y-4"
          >
            <p>
              With over{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                9+ years of experience
              </span>
              , I am a Tech Lead and Security Champion Plus specializing in
              system design and building scalable, resilient systems with
              Java/Spring Boot and Node.js/Next.js. My expertise spans
              enterprise-grade performance optimization, delivering up to{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                30–50x performance improvements
              </span>
              ,{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                70% CPU reduction
              </span>
              , and significant infrastructure cost savings through
              architectural optimization.
            </p>
            <p>
              I drive architectural decisions, lead database performance
              initiatives, and mentor engineers to elevate their craft. From
              AI-enhanced development workflows that cut delivery time by
              40–50%, to leading Blue Green Deployments and owning releases, I
              thrive on solving complex problems and delivering measurable
              business impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="/Ashish-Muralidharan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary-600 dark:border-primary-400"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-primary-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
