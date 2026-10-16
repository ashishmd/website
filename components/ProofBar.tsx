import { caseStudies } from "@/lib/caseStudies";

/** Compact, scannable proof points. Each links to its case study. */
export default function ProofBar() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="px-4 sm:px-6 lg:px-8 -mt-8 pb-12 relative z-20"
    >
      <h2 id="proof-heading" className="sr-only">
        Results at a glance
      </h2>
      <ul className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-4">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <a
              href={`/case-studies/${study.slug}/`}
              className="block h-full rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-primary-400 dark:hover:border-primary-500 transition-all p-4 sm:p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 whitespace-nowrap">
                {study.metric}
              </span>
              <span className="block mt-1 font-semibold text-gray-900 dark:text-white">
                {study.metricLabel}
              </span>
              <span className="block mt-1 text-sm text-gray-600 dark:text-gray-400">
                {study.metricDetail}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
