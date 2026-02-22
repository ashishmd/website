"use client";

import Image from "next/image";
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

      <div className="container-custom px-4 py-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Ashish Muralidharan
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-6 gradient-text"
            >
              Tech Lead & Senior Software Engineer | System Design & Java/Node.js Specialist
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 space-y-4"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
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
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link) => (
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

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 blur-2xl opacity-30 scale-110" />
              <Image
                src="/profile.jpeg"
                alt="Ashish Muralidharan"
                fill
                className="rounded-full object-cover object-center shadow-2xl ring-4 ring-white dark:ring-gray-800 relative z-10"
                priority
              />
            </div>
          </motion.div>

        </div>
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
