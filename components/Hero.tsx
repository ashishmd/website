"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, FileText, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function Hero() {
  const socialLinks = [
    // LinkedIn is omitted here: it already has its own CTA above.
    { icon: Github, href: site.links.github, label: "GitHub" },
    { icon: BookOpen, href: site.links.medium, label: "Blog on Medium" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-custom px-4 pt-28 pb-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Text content: CSS-animated so it is visible before hydration */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-up text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
              Hi, I&apos;m {site.name}
            </p>

            <h1
              className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
              style={{ animationDelay: "0.05s" }}
            >
              {site.headline}
            </h1>

            <p
              className="animate-fade-up text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200"
              style={{ animationDelay: "0.1s" }}
            >
              {site.role} · {site.experience} · Java, Spring Boot, Node.js ·
              System design, performance &amp; security
            </p>

            <p
              className="animate-fade-up text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8"
              style={{ animationDelay: "0.15s" }}
            >
              I work best with engineering organizations building high-scale
              APIs, event-driven systems, privacy-sensitive AI pipelines, and
              third-party integrations.
            </p>

            <div
              className="animate-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#case-studies"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View case studies
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
              <a
                href={site.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary-700 dark:text-primary-300 font-semibold rounded-lg shadow-md transition-all duration-300 border-2 border-primary-600 dark:border-primary-400"
              >
                <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>
                  Résumé
                  <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                    PDF · Updated {site.resume.updated}
                  </span>
                </span>
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-3 font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 underline-offset-4 hover:underline"
              >
                <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
                Connect on LinkedIn
              </a>
            </div>

            <div
              className="animate-fade-up flex justify-center lg:justify-start gap-4"
              style={{ animationDelay: "0.25s" }}
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
                  <link.icon className="w-6 h-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div
            className="animate-fade-up flex-shrink-0"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 blur-2xl opacity-30 scale-110" />
              <Image
                src="/profile.jpeg"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 192px"
                className="rounded-full object-cover object-center shadow-2xl ring-4 ring-white dark:ring-gray-800 relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
