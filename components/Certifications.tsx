"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Zoom Security Champion",
    issuer: "Zoom Video Communications",
    date: "2024",
    description:
      "Zoom Certified Security Champion Plus — driving secure coding practices, performing security reviews, data classification reviews, and elevating team security standards across the organization.",
  },
  {
    title: "Certificate of Security Achievement - Green Belt for Javascript",
    issuer: "Security Journey",
    date: "October 2024",
    description:
      "Advanced security certification focusing on secure JavaScript development practices and vulnerability mitigation.",
  },
  {
    title: "Advanced Microservices: Tactical Forking",
    issuer: "LinkedIn Learning",
    date: "October 2023",
    description:
      "Advanced certification in microservices architecture patterns and tactical forking strategies for scalable systems.",
  },
  {
    title: "Microservices and Software Architecture",
    issuer: "LinkedIn Learning",
    date: "2023",
    description:
      "Comprehensive certification covering microservices design patterns, system architecture, and best practices.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications validating expertise in key technologies
            and practices
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
