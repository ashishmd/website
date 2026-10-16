import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Security Champion Plus",
    issuer: "Internal Security Champions program",
    date: "2024",
  },
  {
    title: "Certificate of Security Achievement: Green Belt for JavaScript",
    issuer: "Security Journey",
    date: "Oct 2024",
  },
  {
    title: "Advanced Microservices: Tactical Forking",
    issuer: "LinkedIn Learning",
    date: "Oct 2023",
  },
  {
    title: "Microservices and Software Architecture",
    issuer: "LinkedIn Learning",
    date: "2023",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-padding scroll-mt-20 bg-white dark:bg-gray-900">
      <div className="container-custom max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Certifications &amp; Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <p className="font-semibold text-gray-900 dark:text-white">{cert.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer} · {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              Education
            </h3>
            <p className="font-semibold text-gray-900 dark:text-white">
              Bachelor of Technology, Computer Science &amp; Engineering
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              College of Engineering Chengannur (APJ Abdul Kalam Technological University) · 2012–2016
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Chairman of the IEEE Computer Society student chapter: organized
              technical events and workshops for the student community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
