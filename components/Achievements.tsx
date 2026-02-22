"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Zap, Shield } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "30–50x Performance Gains & 70% CPU Reduction",
    description:
      "Achieved 30x improvement in a critical real-time event processing pipeline (2.5 hours to 5 minutes for 30K events), 50x gains through architectural optimization, and 70% DB CPU reduction via schema restructuring and 15+ slow query fixes — resulting in DB instance downsizing and significant cost savings.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "AI-Enhanced Development & 40–50% Faster Delivery",
    description:
      "Pioneered AI-enhanced development workflows using Cursor AI to deliver complete features end-to-end — from PRD and tech-spec through code — reducing delivery time by 40–50% with near-zero bug rate. Trained and enabled the team to adopt similar workflows.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Zoom Certified Security Champion Plus",
    description:
      "Achieved Security Champion Plus certification — performing security reviews, data classification reviews, and driving team-wide security practices. Proactively identified and resolved multiple critical security vulnerabilities across WFM services.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Trophy,
    title: "Q3 Top Performer & Zero-Bug Delivery Track Record",
    description:
      "Recognized as Q3 Top Performer in the WFM team for application scalability improvements. Consistently delivered complex features with zero bugs identified by QA, maintaining 100% test coverage on all new code.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-white dark:bg-gray-900"
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
            Key Achievements & Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Throughout my career, I've consistently delivered measurable impact
            through technical leadership, innovation, and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div
                className={`inline-flex p-4 bg-gradient-to-br ${achievement.color} rounded-xl mb-4`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
