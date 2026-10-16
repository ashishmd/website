import { MapPin, Calendar, Target } from "lucide-react";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container-custom max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-10 items-start">
          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a Senior Software Engineer and Tech Lead at Zoom, where I
              lead a team of 13 engineers. Over 10+ years at Zoom, Freshworks,
              and Zoho, I&apos;ve worked on backend platforms, third-party
              integrations, data pipelines and, more recently, privacy-first AI
              systems.
            </p>
            <p>
              I like problems where performance, security, and scale meet, and
              I care just as much about the team as the system. Good
              engineering leadership, to me, means the team can make strong
              decisions without waiting for me.
            </p>
            <p>
              Outside of day-to-day delivery, I{" "}
              <a
                href="#publications"
                className="font-semibold text-primary-700 dark:text-primary-300 underline underline-offset-4"
              >
                write about engineering
              </a>
              , host a biweekly knowledge-sharing forum, and mentor engineers.
            </p>
          </div>

          <aside className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md p-6 space-y-4">
            <p className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <Target className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" aria-hidden="true" />
              <span>
                <span className="font-semibold text-gray-900 dark:text-white">Open to: </span>
                {site.targetRoles}
              </span>
            </p>
            <p className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" aria-hidden="true" />
              <span>
                {site.location}. Open to {site.workPreferences}.
              </span>
            </p>
            <p className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" aria-hidden="true" />
              <span>Building software professionally since 2016</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
