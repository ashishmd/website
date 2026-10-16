import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import CaseStudies from "@/components/CaseStudies";
import HowILead from "@/components/HowILead";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: site.url,
  mainEntity: {
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: `${site.role} with ${site.experience} of experience in backend systems, system design, performance, security, and privacy-first AI pipelines.`,
    image: `${site.url}/profile.jpeg`,
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    sameAs: [site.links.github, site.links.linkedin, site.links.medium],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Node.js",
      "TypeScript",
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Kafka",
      "MySQL",
      "Performance Optimization",
      "Application Security",
      "LLM Pipelines",
    ],
    worksFor: { "@type": "Organization", name: "Zoom" },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProofBar />
        <CaseStudies />
        <HowILead />
        <Experience />
        <Skills />
        <Publications />
        <About />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
