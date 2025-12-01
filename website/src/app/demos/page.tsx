"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DemosPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-pink)]/5 via-transparent to-[var(--neon-blue)]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-pink)]/30 bg-[var(--neon-pink)]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-pink)] animate-pulse" />
            <span className="text-sm font-mono text-[var(--neon-pink)]">
              {t("demos.terminalPath")}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--neon-pink)]">{"{"}</span>
            {t("demos.title")}
            <span className="text-[var(--neon-blue)]">{"}"}</span>
          </h1>

          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
            {t("demos.subtitle")} <span className="text-[var(--neon-pink)]">{t("demos.games")}</span>,{" "}
            <span className="text-[var(--neon-blue)]">{t("demos.webExperiments")}</span>, {t("demos.prototypes")}{" "}
            <span className="text-[var(--neon-green)]">{t("demos.inBrowser")}</span>
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Animated icon */}
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center mx-auto">
                <svg className="w-16 h-16 text-[var(--neon-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 w-32 h-32 rounded-2xl border border-[var(--neon-pink)]/30 animate-ping mx-auto" style={{ animationDuration: "2s" }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">&lt;</span>
              Coming Soon
              <span className="text-[var(--neon-blue)]">/&gt;</span>
            </h2>

            <p className="text-xl text-[var(--muted)] mb-6 max-w-lg mx-auto">
              Will be published soon
            </p>

            <p className="text-sm text-[var(--muted)]/60 font-mono">
              // Our interactive demos and applications are currently in development
            </p>

            {/* Progress indicator */}
            <div className="mt-12 max-w-md mx-auto">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                <span>Progress</span>
                <span className="text-[var(--neon-green)]">In Development</span>
              </div>
              <div className="h-2 bg-[var(--card)] rounded-full border border-[var(--border)] overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-blue)]"
                  style={{ width: "35%", animation: "pulse 2s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
