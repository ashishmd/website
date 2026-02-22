'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target } from 'lucide-react';

const leadershipRoles = [
  {
    period: '2024 - Present',
    title: 'Security Champion Plus, WFM & Ecosystem Teams',
    organization: 'Zoom',
    icon: Award,
    description: 'Zoom Certified Security Champion Plus — performing security reviews, data classification reviews for the data-governance portal, and driving team-wide security practices including threat modeling.',
  },
  {
    period: '2022 - Present',
    title: 'Tech-Lead, Ecosystem Team',
    organization: 'Zoom',
    icon: Target,
    description: 'Leading technical strategy and architectural decisions for the Ecosystem team, mentoring engineers and driving high-quality deliverables.',
  },
  {
    period: '2020 - 2022',
    title: 'Scrum Master / Tech-Lead',
    organization: 'Freshworks',
    icon: Users,
    description: 'Led squad as Scrum Master and Tech Lead, driving team efficiency, growth, and technical excellence.',
  },
  {
    period: '2015 - 2018',
    title: 'Chairman, IEEE Computer Society',
    organization: 'College of Engineering Chengannur',
    icon: Users,
    description: 'Led the IEEE Computer Society chapter, organizing technical events and fostering a community of learning.',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Leadership Roles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Positions where I've driven team success, technical excellence, and organizational impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex-shrink-0">
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-1">
                    {role.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {role.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {role.organization}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
