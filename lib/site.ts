// Single source of truth for facts repeated across the site.
// Keep in sync with public/Ashish-Muralidharan.pdf (the résumé is canonical).

export const site = {
  name: "Ashish Muralidharan",
  url: "https://ashishm.dev",
  role: "Senior Software Engineer & Tech Lead",
  headline:
    "I help engineering teams make backend systems faster, safer, and easier to scale.",
  experience: "10+ years",
  location: "Bengaluru, India (IST)",
  email: "emailme@ashishm.dev",
  // Shown next to the contact form. Change if you want a different promise.
  responseTime: "I usually reply within 2 business days.",
  // Web3Forms access key (https://web3forms.com, free plan: 250 messages/month).
  // It's designed to be public: it can only deliver messages to your inbox.
  // While empty, the form falls back to opening the visitor's email app.
  web3formsAccessKey: "c909ab9d-342b-4169-b0b7-3b6abad946af",
  targetRoles: "Staff/Principal Engineer, Tech Lead, and Architect roles",
  workPreferences: "international, remote, Bengaluru, or relocation",
  resume: {
    href: "/Ashish-Muralidharan.pdf",
    // Update when the résumé PDF is replaced.
    updated: "Oct 2026",
  },
  links: {
    github: "https://github.com/ashishmd",
    linkedin: "https://www.linkedin.com/in/ashishmuralidharan",
    medium: "https://ashishmd.medium.com",
  },
} as const;
