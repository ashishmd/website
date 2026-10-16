import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { site } from "@/lib/site";

type Params = { slug: string };

// Static export: only the known slugs exist.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const path = `/case-studies/${study.slug}/`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `${site.url}${path}`,
      siteName: site.name,
      type: "article",
      images: [{ url: `${site.url}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: [`${site.url}/og-image.png`],
    },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="text-primary-600 dark:text-primary-400 mt-0.5" aria-hidden="true">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <a
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:underline underline-offset-4 mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All case studies
          </a>

          <header className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-2">
              Case study
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">{study.summary}</p>

            <div className="mt-6 inline-flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-6 py-4">
              <span className="text-3xl font-bold text-primary-700 dark:text-primary-300">
                {study.metric} <span className="text-lg">{study.metricLabel}</span>
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{study.metricDetail}</span>
            </div>
          </header>

          <Section title="The problem">
            <p>{study.problem}</p>
          </Section>

          <Section title="Context and scale">
            <BulletList items={study.context} />
          </Section>

          <Section title="My role">
            <p>{study.role}</p>
          </Section>

          <Section title="Diagnosis">
            <p>{study.diagnosis}</p>
          </Section>

          <Section title="Solution">
            <BulletList items={study.solution} />
          </Section>

          <Section title="Result">
            <p>{study.result}</p>
          </Section>

          {study.lessons && study.lessons.length > 0 && (
            <Section title="Lessons">
              <BulletList items={study.lessons} />
            </Section>
          )}

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Technologies</h2>
            <ul className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium border border-primary-200 dark:border-gray-600"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-12">
            Details are generalized to respect employer confidentiality.
          </p>

          <aside className="rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-primary-200 dark:border-gray-600 p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Working on a similar problem?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m open to {site.targetRoles}. Send me a short note with the context.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Get in touch
              </a>
              <a
                href={site.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 font-semibold rounded-lg border-2 border-primary-600 text-primary-700 dark:text-primary-300 dark:border-primary-400"
              >
                Résumé (PDF)
              </a>
            </div>
          </aside>

          <a
            href={`/case-studies/${next.slug}/`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:border-primary-400 transition-colors"
          >
            <span>
              <span className="block text-sm text-gray-600 dark:text-gray-400">Next case study</span>
              <span className="block font-semibold text-gray-900 dark:text-white">{next.title}</span>
            </span>
            <ArrowRight
              className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
