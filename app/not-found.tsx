import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Exported as 404.html, which GitHub Pages serves for unknown paths,
// including old résumé URLs that no longer exist.
export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            This page doesn&apos;t exist
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            If you were looking for my résumé, it has moved to a single,
            up-to-date link.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={site.resume.href}
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg"
            >
              Open résumé (PDF)
            </a>
            <a
              href="/"
              className="inline-flex items-center px-5 py-2.5 font-semibold rounded-lg border-2 border-primary-600 text-primary-700 dark:text-primary-300 dark:border-primary-400"
            >
              Go to homepage
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
