import { Code2, Lightbulb, Users } from "lucide-react";

const stats = [
  { value: "13", label: "engineers on the team I lead" },
  { value: "5–6", label: "engineers mentored, early-career to senior" },
  { value: "~40", label: "interviews for full-stack roles" },
  { value: "Since 2022", label: "hosting biweekly Technical Thursdays" },
];

// Time split is kept as context, but each area is framed by what it enables.
const focusAreas = [
  {
    icon: Code2,
    share: "60%",
    title: "Hands-on architecture",
    outcome: "Better architecture decisions and faster resolution of hard problems.",
    example:
      "Designed the shared authentication and proxy platform that delivered 21 integrations in 5 months and was adopted by 5 product teams.",
  },
  {
    icon: Lightbulb,
    share: "30%",
    title: "Strategy & delivery",
    outcome: "Clearer roadmaps, reliable estimates, and cross-team alignment.",
    example:
      "Coordinated across squads with a partner product team to deliver core features that unblocked onboarding for major enterprise customers.",
  },
  {
    icon: Users,
    share: "10%",
    title: "Mentorship & team growth",
    outcome: "Stronger ownership, better reviews, and a team that grows its own capability.",
    example:
      "During the database initiative, ran sessions on MySQL internals so the team could find and fix slow queries themselves.",
  },
];

const practices = [
  "Led adoption of Blue-Green deployments across teams as Release Owner, for zero-downtime releases.",
  "Set standards for AI-assisted development that cut end-to-end feature delivery time by 70% with a near-zero defect rate.",
  "Security Champion Plus: threat modeling, data-classification standards, and mentoring engineers on secure design.",
  "Created and host Technical Thursdays, a biweekly forum on performance, async messaging, and Node.js architecture.",
  "Recognized as Q3 Top Performer for org-wide scalability, monitoring, pod scaling, and database optimization work.",
];

export default function HowILead() {
  return (
    <section id="how-i-lead" className="section-padding scroll-mt-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            How I Lead
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hands-on technical leadership: I stay close to the code, and measure
            leadership by what the team can do without me.
          </p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center bg-gray-50 dark:bg-gray-800"
            >
              <dt className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</dt>
              <dd className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg">
                  <area.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {area.title}{" "}
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    · {area.share} of my time
                  </span>
                </h3>
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{area.outcome}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold">Example: </span>
                {area.example}
              </p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Practices I&apos;ve introduced
          </h3>
          <ul className="space-y-3">
            {practices.map((practice) => (
              <li key={practice} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 mt-0.5" aria-hidden="true">
                  ▸
                </span>
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
