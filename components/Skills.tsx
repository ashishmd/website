// Priority-ordered and aligned with the résumé's Technical Skills section.
const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "TypeScript", "Ruby on Rails", "Python", "C++"],
  },
  {
    title: "Architecture",
    skills: [
      "Distributed systems",
      "Microservices",
      "Monolith-to-microservices decoupling",
      "Event-driven systems (Kafka)",
      "RESTful API design",
      "Blue-Green deployments",
      "CI/CD",
    ],
  },
  {
    title: "Data & performance",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Query & index optimization",
      "Data archival strategies",
      "ZFS",
    ],
  },
  {
    title: "Security",
    skills: ["Threat modeling", "Data classification", "PII redaction", "OAuth 2.0", "PKCE"],
  },
  {
    title: "AI & LLM pipelines",
    skills: ["LLM routing", "Semantic caching", "SSE streaming", "AI observability"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "EmberJS", "HTML", "CSS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container-custom max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <dl className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-6 p-5"
            >
              <dt className="font-bold text-gray-900 dark:text-white">{category.title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium border border-primary-200 dark:border-gray-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
