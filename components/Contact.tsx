"use client";

import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, BookOpen, Send, CheckCircle, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const web3formsEnabled = site.web3formsAccessKey.length > 0;

const topics = [
  "Hiring opportunity",
  "Technical collaboration",
  "Speaking or writing",
  "Mentorship",
  "Other",
] as const;

type Fields = { name: string; email: string; topic: string; message: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const emptyFields: Fields = { name: "", email: "", topic: topics[0], message: "" };

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Enter your name.";
  if (!fields.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (fields.message.trim().length < 10)
    errors.message = "Write a short message (at least 10 characters).";
  return errors;
}

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition";

export default function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }

    const subject = `[ashishm.dev] ${fields.topic}: ${fields.name.trim()}`;

    if (!web3formsEnabled) {
      const body = `${fields.message.trim()}\n\nFrom: ${fields.name.trim()} <${fields.email.trim()}>`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    try {
      const botcheck = (formRef.current?.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false;
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject,
          from_name: "ashishm.dev contact form",
          name: fields.name.trim(),
          email: fields.email.trim(),
          topic: fields.topic,
          message: fields.message.trim(),
          botcheck,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setFields(emptyFields);
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }
      setServerMessage(
        res.status === 429
          ? "Too many messages were sent from this connection. Please try again in a little while."
          : "Your message couldn't be sent.",
      );
    } catch {
      setServerMessage("Your message couldn't be sent. Check your connection and try again.");
    }
    setStatus("error");
    requestAnimationFrame(() => errorRef.current?.focus());
  };

  const fieldProps = (key: keyof Fields) => ({
    id: `contact-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    required: true,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
    className: `${inputClass} ${
      errors[key] ? "border-red-600 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
    }`,
  });

  const FieldError = ({ field }: { field: keyof Fields }) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1 text-sm text-red-700 dark:text-red-400">
        {errors[field]}
      </p>
    ) : null;

  const Label = ({ field, children }: { field: keyof Fields; children: React.ReactNode }) => (
    <label htmlFor={`contact-${field}`} className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
      {children} <span className="text-gray-500 dark:text-gray-400 font-normal">(required)</span>
    </label>
  );

  const contactInfo = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: site.location, href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: site.links.linkedin },
    { icon: Github, label: "GitHub", href: site.links.github },
    { icon: BookOpen, label: "Blog on Medium", href: site.links.medium },
  ];

  return (
    <section id="contact" className="section-padding scroll-mt-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interested in backend or platform engineering, technical leadership,
            or system-design work? Send me a short note with the context, the
            problem, and what you&apos;re looking for.
          </p>
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <span className="font-semibold">Open to {site.targetRoles}</span>:{" "}
            {site.workPreferences}.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
              <ul className="space-y-6">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-medium text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-300 underline-offset-4 hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-gray-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Connect With Me</p>
              <ul className="flex gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-md hover:shadow-lg transition-shadow text-primary-700 dark:text-primary-300"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8" role="status">
                <CheckCircle className="w-16 h-16 text-green-600" aria-hidden="true" />
                <h3 ref={successRef} tabIndex={-1} className="text-2xl font-bold text-gray-900 dark:text-white focus:outline-none">
                  Thanks, your message was sent
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{site.responseTime}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-primary-700 dark:text-primary-300 text-sm font-semibold hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Send a Message</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{site.responseTime}</p>

                {status === "error" && (
                  <div
                    ref={errorRef}
                    tabIndex={-1}
                    role="alert"
                    className="mb-6 flex gap-3 rounded-lg border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950 p-4 text-red-800 dark:text-red-200 focus:outline-none"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      {serverMessage} You can also email me directly at{" "}
                      <a href={`mailto:${site.email}`} className="font-semibold underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  // Without JavaScript the form posts straight to Web3Forms.
                  action={web3formsEnabled ? WEB3FORMS_ENDPOINT : undefined}
                  method={web3formsEnabled ? "POST" : undefined}
                >
                  {web3formsEnabled && (
                    <>
                      <input type="hidden" name="access_key" value={site.web3formsAccessKey} />
                      <input type="hidden" name="from_name" value="ashishm.dev contact form" />
                    </>
                  )}
                  {/* Honeypot: hidden from people and assistive tech; bots tick it. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label field="name">Name</Label>
                      <input type="text" autoComplete="name" {...fieldProps("name")} />
                      <FieldError field="name" />
                    </div>
                    <div>
                      <Label field="email">Email</Label>
                      <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
                      <FieldError field="email" />
                    </div>
                  </div>

                  <div>
                    <Label field="topic">What&apos;s this about?</Label>
                    <select {...fieldProps("topic")}>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label field="message">Message</Label>
                    <textarea
                      rows={5}
                      placeholder="The context, the problem, and what you're looking for"
                      {...fieldProps("message")}
                      className={`${fieldProps("message").className} resize-y`}
                    />
                    <FieldError field="message" />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {status === "submitting"
                      ? "Sending…"
                      : web3formsEnabled
                        ? "Send message"
                        : "Open in my email app"}
                  </button>

                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {web3formsEnabled ? (
                      <>
                        Messages are delivered to my inbox through{" "}
                        <a
                          href="https://web3forms.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Web3Forms
                        </a>
                        . I only use your details to reply to you.
                      </>
                    ) : (
                      <>This opens your email app with the message filled in. I only use your details to reply to you.</>
                    )}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
