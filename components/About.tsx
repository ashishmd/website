"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Calendar, Coffee } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "9+" },
  { label: "Performance Improvement", value: "50x" },
  { label: "CPU Reduction Achieved", value: "70%" },
  { label: "Delivery Time Saved", value: "40–50%" },
];

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A little more about who I am and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Tech Lead & Senior Software Engineer
              </span>{" "}
              with over 9 years of experience building scalable, resilient
              systems. Currently at{" "}
              <span className="font-semibold">Zoom Video Communications</span>,
              I lead the Ecosystem team&apos;s technical strategy and serve as a
              certified Security Champion Plus.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My passion lies in solving hard engineering problems — whether
              that&apos;s a 30x pipeline performance improvement, a 70% database
              CPU reduction, or pioneering AI-enhanced workflows that cut
              delivery time in half. I believe great engineering is as much
              about people as it is about code.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of work, I enjoy writing technical articles on Medium,
              organizing knowledge-sharing sessions, and mentoring engineers to
              grow in their careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>India (Remote — IST)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Zoom Video Communications</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>Since 2016</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="col-span-2 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-primary-200 dark:border-gray-600 flex items-center gap-4"
            >
              <Coffee className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold">Open to opportunities</span> —
                I&apos;m always happy to discuss interesting engineering
                challenges, leadership roles, or collaborations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
