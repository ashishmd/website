'use client';

import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb } from 'lucide-react';

const approaches = [
  {
    icon: Code2,
    title: '60% - Hands-on Technical Work',
    description: 'I dedicate significant time to technical discussions with the team, helping them make the best architectural decisions. This includes design reviews, system architecture planning, and guiding the team through complex technical challenges to ensure we build robust, scalable solutions.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: '30% - Strategic Initiatives & Ad-hoc Tasks',
    description: 'This includes crucial team success activities like effort estimation ("T-shirt sizing"), roadmap planning, cross-team collaboration, and addressing urgent technical challenges. I help ensure our engineering efforts are well-planned and efficiently executed.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: '10% - Mentorship & Team Growth',
    description: 'I am passionate about helping other engineers grow. Through 1-on-1s, pair programming, and sharing knowledge, I work to elevate the technical capabilities of the entire team, fostering an environment of continuous learning and improvement.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How I balance technical leadership, strategic planning, and team development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 h-full">
                <div className={`inline-flex p-4 bg-gradient-to-br ${approach.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${approach.color} bg-clip-text text-transparent`}>
                  {approach.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
