import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-padding scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Selected Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The problem, my role, how I diagnosed it, what I built, and what
            changed.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <article className="relative h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  {study.metric} {study.metricLabel}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  <a
                    href={`/case-studies/${study.slug}/`}
                    className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-primary-600"
                  >
                    {study.title}
                  </a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {study.summary}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies">
                  {study.stack.slice(0, 5).map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium border border-primary-200 dark:border-gray-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 dark:text-primary-300"
                  aria-hidden="true"
                >
                  Read case study <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
