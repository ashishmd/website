import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Muralidharan - Tech Lead & Senior Software Engineer",
  description: "Portfolio of Ashish Muralidharan — Tech Lead & Senior Software Engineer with 9+ years of experience specializing in system design, Java/Spring Boot, and Node.js/Next.js. Based in India (Remote).",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Ashish Muralidharan - Tech Lead & Senior Software Engineer",
    description: "Tech Lead with 9+ years of experience delivering 30–50x performance improvements, leading Blue Green Deployments, and pioneering AI-enhanced development workflows.",
    url: "https://ashishm.dev",
    siteName: "Ashish Muralidharan",
    images: [
      {
        url: "https://ashishm.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashish Muralidharan - Tech Lead & Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Muralidharan - Tech Lead & Senior Software Engineer",
    description: "Tech Lead with 9+ years of experience in system design, Java/Spring Boot, and Node.js/Next.js.",
    images: ["https://ashishm.dev/og-image.png"],
  },
  metadataBase: new URL("https://ashishm.dev"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashish Muralidharan",
  url: "https://ashishm.dev",
  jobTitle: "Tech Lead & Senior Software Engineer",
  description: "Tech Lead with 9+ years of experience specializing in system design, Java/Spring Boot, and Node.js/Next.js.",
  sameAs: [
    "https://github.com/ashishmd",
    "https://www.linkedin.com/in/ashishmuralidharan",
    "https://ashishmd.medium.com",
  ],
  knowsAbout: ["Java", "Node.js", "TypeScript", "System Design", "Microservices", "Spring Boot", "Next.js", "Kubernetes"],
  worksFor: {
    "@type": "Organization",
    name: "Zoom Video Communications",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
