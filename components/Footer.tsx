"use client";

import { Github, Linkedin, BookOpen, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ashishmd", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ashishmuralidharan",
    label: "LinkedIn",
  },
  { icon: BookOpen, href: "https://ashishmd.medium.com", label: "Blog" },
  { icon: Mail, href: "mailto:emailme@ashishm.dev", label: "Email" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Ashish Muralidharan
            </h3>
            <p className="text-sm leading-relaxed">
              Tech Lead & Senior Software Engineer specializing in system
              design, Java/Spring Boot, and Node.js/Next.js.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors hover:text-primary-400"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm mt-4">
              <a
                href="mailto:emailme@ashishm.dev"
                className="hover:text-primary-400 transition-colors"
              >
                emailme@ashishm.dev
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p>© {currentYear} Ashish Muralidharan. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
