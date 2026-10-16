import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/site";

// Framer Motion server-renders `initial` states as inline styles
// (e.g. opacity:0). Without JavaScript those never animate in, so this
// override keeps all content visible for no-JS visitors and crawlers.
const noScriptCss =
  '[style*="opacity:0"]{opacity:1!important;transform:none!important}';

const inter = Inter({ subsets: ["latin"] });

// GitHub Pages can't send custom response headers, so the CSP is delivered
// as a <meta> tag. Limits of the meta form: no frame-ancestors, no reporting.
// 'unsafe-inline' is required because the static export inlines Next.js
// bootstrap scripts and Framer Motion writes inline styles.
// Production only: the dev server needs eval for fast refresh.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://api.web3forms.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "upgrade-insecure-requests",
].join("; ");

const title = `${site.name} | Senior Software Engineer & Tech Lead: Backend, System Design & Performance`;
const description =
  "Senior Software Engineer and Tech Lead specializing in Java, Spring Boot, Node.js, system design, secure integrations, privacy-first AI pipelines, and performance optimization. 10+ years building scalable systems and leading engineering teams.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role}`,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${site.url}/og-image.png`],
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
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        )}
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptCss }} />
        </noscript>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
