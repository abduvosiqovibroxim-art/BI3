"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-pink)]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)] animate-pulse" />
            <span className="text-sm font-mono text-[var(--neon-blue)]">
              ~/connect/contact
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--neon-blue)]">{">"}</span>
            {" "}{t("contact.title")}{" "}
            <span className="text-[var(--neon-pink)]">_</span>
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            {t("contact.subtitle")}
            <br />
            <span className="text-[var(--neon-blue)]">{t("contact.loveToHear")}</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neon-blue)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {t("contact.quickContact")}
                </h2>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:hello@bi3.dev"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 flex items-center justify-center group-hover:bg-[var(--neon-blue)]/20 transition-colors">
                      <svg className="w-6 h-6 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">{t("contact.emailUs")}</p>
                      <p className="font-mono text-[var(--neon-blue)]">hello@bi3.dev</p>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/abduvosiqov_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--neon-pink)]/10 flex items-center justify-center group-hover:bg-[var(--neon-pink)]/20 transition-colors">
                      <svg className="w-6 h-6 text-[var(--neon-pink)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">{t("contact.telegram")}</p>
                      <p className="font-mono text-[var(--neon-pink)]">@abduvosiqov_1</p>
                    </div>
                  </a>

                  {/* Discord */}
                  <a
                    href="https://discord.gg/bi3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-purple)]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--neon-purple)]/10 flex items-center justify-center group-hover:bg-[var(--neon-purple)]/20 transition-colors">
                      <svg className="w-6 h-6 text-[var(--neon-purple)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">{t("contact.discord")}</p>
                      <p className="font-mono text-[var(--neon-purple)]">{t("contact.community")}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neon-green)]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  {t("contact.location")}
                </h2>
                <p className="text-[var(--muted)] mb-2">{t("contact.basedIn")}</p>
                <p className="text-lg font-bold text-[var(--neon-green)]">{t("about.tashkent")}</p>
                <p className="text-sm text-[var(--muted)] mt-2 font-mono">
                  UTC+5 • {t("contact.availableRemote")}
                </p>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h2 className="text-xl font-bold mb-4">{t("contact.followUs")}</h2>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/bi3dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:border-white/50 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/bi3dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--neon-blue)]/50 hover:text-[var(--neon-blue)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/bi3dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--neon-blue)]/50 hover:text-[var(--neon-blue)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@bi3dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--neon-red)]/50 hover:text-[var(--neon-red)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h2 className="text-2xl font-bold mb-2">{t("contact.startProject")}</h2>
                <p className="text-[var(--muted)] mb-8">
                  {t("contact.formDesc")}
                </p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--neon-green)]">{t("contact.messageSent")}</h3>
                    <p className="text-[var(--muted)] mb-6">
                      {t("contact.thankYou")}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", projectType: "", budget: "", message: "" });
                      }}
                      className="px-6 py-3 rounded-lg border border-[var(--border)] font-mono text-sm hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors"
                    >
                      {t("contact.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-mono text-[var(--muted)] mb-2">
                          {t("contact.name")} <span className="text-[var(--neon-pink)]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-mono text-[var(--muted)] mb-2">
                          {t("contact.email")} <span className="text-[var(--neon-pink)]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-mono text-[var(--muted)] mb-2">
                        {t("contact.subject")} <span className="text-[var(--neon-pink)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-mono text-[var(--muted)] mb-2">
                          {t("contact.projectType")}
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                        >
                          <option value="">{t("contact.selectType")}</option>
                          <option value="website">{t("contact.website")}</option>
                          <option value="webapp">{t("contact.webApp")}</option>
                          <option value="mobile">{t("contact.mobileApp")}</option>
                          <option value="game">{t("contact.game")}</option>
                          <option value="design">{t("contact.design")}</option>
                          <option value="other">{t("contact.other")}</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-sm font-mono text-[var(--muted)] mb-2">
                          {t("contact.budget")}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                        >
                          <option value="">{t("contact.selectBudget")}</option>
                          <option value="small">$500 - $2,000</option>
                          <option value="medium">$2,000 - $5,000</option>
                          <option value="large">$5,000 - $10,000</option>
                          <option value="enterprise">$10,000+</option>
                          <option value="discuss">{t("contact.letsDiscuss")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-mono text-[var(--muted)] mb-2">
                        {t("contact.message")} <span className="text-[var(--neon-pink)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors resize-none"
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg bg-[var(--neon-blue)] text-black font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t("contact.sending")}
                        </>
                      ) : (
                        <>
                          <span>{">"}</span>
                          {t("contact.sendMessage")}
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-[var(--neon-blue)]">{"{"}</span>
            {" "}{t("contact.faq")}{" "}
            <span className="text-[var(--neon-pink)]">{"}"}</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: t("contact.faq1Q"),
                a: t("contact.faq1A"),
              },
              {
                q: t("contact.faq2Q"),
                a: t("contact.faq2A"),
              },
              {
                q: t("contact.faq3Q"),
                a: t("contact.faq3A"),
              },
              {
                q: t("contact.faq4Q"),
                a: t("contact.faq4A"),
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                <h3 className="font-bold mb-2 flex items-center gap-3">
                  <span className="text-[var(--neon-blue)] font-mono">Q{i + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-[var(--muted)] pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
