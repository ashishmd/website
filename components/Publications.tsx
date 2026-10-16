'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

// Sourced from https://medium.com/@ashishmd/feed — keep in sync when publishing.
const publications = [
  {
    title: 'Why Your Team Needs a Security Champion (And Why It Should Be You)',
    platform: 'Medium',
    date: 'April 2026',
    description: 'Why security has to shift left into design and everyday development, and how a Security Champion makes it a shared team responsibility instead of a final gate.',
    link: 'https://ashishmd.medium.com/why-your-team-needs-a-security-champion-and-why-it-should-be-you-03200ae65c2d',
  },
  {
    title: 'Navigating the Challenges and Milestones as the First Member in Zoom Video Communications — India R&D Team for Contact Center',
    platform: 'Medium',
    date: 'January 2024',
    description: 'The challenges and milestones of joining as the first member of Zoom’s India R&D team for Contact Center, after four years at Freshworks.',
    link: 'https://ashishmd.medium.com/navigating-the-challenges-and-milestones-as-the-first-member-in-zoom-video-communications-india-b78679605770',
  },
  {
    title: 'Summary of Clean Code by Robert C. Martin (3-part series)',
    platform: 'Medium',
    date: 'March 2021',
    description: 'A practical, chapter-by-chapter summary of Clean Code, covering the overview, meaningful names, and writing small, single-purpose functions.',
    link: 'https://ashishmd.medium.com/summary-of-clean-code-by-robert-c-martin-part-1-overview-c8894d975ebb',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section-padding scroll-mt-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Writing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Articles on security, engineering culture, and clean code
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {pub.title}
                    </h3>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex-shrink-0"
                      aria-label={`Read ${pub.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{pub.platform}</span>
                    <span>•</span>
                    <span>{pub.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://ashishmd.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
