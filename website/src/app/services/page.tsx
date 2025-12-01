"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "web",
      title: t("services.webDev"),
      tagline: t("home.webDevDesc"),
      description: t("services.webDevDesc"),
      features: [
        t("services.webDevFeature1"),
        t("services.webDevFeature2"),
        t("services.webDevFeature3"),
        t("services.webDevFeature4"),
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      colorVar: "var(--neon-purple)",
      borderClass: "border-[var(--neon-purple)]/20 hover:border-[var(--neon-purple)]/50",
      iconBgClass: "bg-[var(--neon-purple)]/10 border-[var(--neon-purple)]/30 text-[var(--neon-purple)]",
      tagClass: "text-[var(--neon-purple)]/80",
      techClass: "bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border-[var(--neon-purple)]/20",
      dotClass: "bg-[var(--neon-purple)]",
      titleClass: "text-[var(--neon-purple)]",
    },
    {
      id: "games",
      title: t("services.gameDev"),
      tagline: t("home.gameDevDesc"),
      description: t("services.gameDevDesc"),
      features: [
        t("services.gameDevFeature1"),
        t("services.gameDevFeature2"),
        t("services.gameDevFeature3"),
        t("services.gameDevFeature4"),
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Photoshop"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      colorVar: "var(--neon-pink)",
      borderClass: "border-[var(--neon-pink)]/20 hover:border-[var(--neon-pink)]/50",
      iconBgClass: "bg-[var(--neon-pink)]/10 border-[var(--neon-pink)]/30 text-[var(--neon-pink)]",
      tagClass: "text-[var(--neon-pink)]/80",
      techClass: "bg-[var(--neon-pink)]/10 text-[var(--neon-pink)] border-[var(--neon-pink)]/20",
      dotClass: "bg-[var(--neon-pink)]",
    },
    {
      id: "mobile",
      title: t("services.mobileDev"),
      tagline: t("home.mobileAppsDesc"),
      description: t("services.mobileDevDesc"),
      features: [
        t("services.mobileDevFeature1"),
        t("services.mobileDevFeature2"),
        t("services.mobileDevFeature3"),
        t("services.mobileDevFeature4"),
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      colorVar: "var(--neon-purple)",
      borderClass: "border-[var(--neon-purple)]/20 hover:border-[var(--neon-purple)]/50",
      iconBgClass: "bg-[var(--neon-purple)]/10 border-[var(--neon-purple)]/30 text-[var(--neon-purple)]",
      tagClass: "text-[var(--neon-purple)]/80",
      techClass: "bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border-[var(--neon-purple)]/20",
      dotClass: "bg-[var(--neon-purple)]",
    },
    {
      id: "design",
      title: t("services.uiuxDesign"),
      tagline: t("home.uiuxDesignDesc"),
      description: t("services.uiuxDesignDesc"),
      features: [
        t("services.uiuxFeature1"),
        t("services.uiuxFeature2"),
        t("services.uiuxFeature3"),
        t("services.uiuxFeature4"),
      ],
      technologies: ["Figma", "Adobe XD", "Illustrator", "After Effects", "Framer", "Principle"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      colorVar: "var(--neon-purple)",
      borderClass: "border-[var(--neon-purple)]/20 hover:border-[var(--neon-purple)]/50",
      iconBgClass: "bg-[var(--neon-purple)]/10 border-[var(--neon-purple)]/30 text-[var(--neon-purple)]",
      tagClass: "text-[var(--neon-purple)]/80",
      techClass: "bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border-[var(--neon-purple)]/20",
      dotClass: "bg-[var(--neon-purple)]",
    },
  ];

  const process = [
    {
      step: "01",
      title: t("services.step1"),
      description: t("services.step1Desc"),
    },
    {
      step: "02",
      title: t("services.step2"),
      description: t("services.step2Desc"),
    },
    {
      step: "03",
      title: t("services.step3"),
      description: t("services.step3Desc"),
    },
    {
      step: "04",
      title: t("services.step4"),
      description: t("services.step4Desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden cyber-grid">
        <div className="absolute inset-0 scanlines opacity-50" />

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-pink)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--neon-purple)]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse shadow-[0_0_8px_var(--neon-green)]" />
            <code className="text-sm font-mono">
              <span className="text-[var(--neon-purple)]">$</span>
              <span className="text-[var(--muted)]"> ls</span>
              <span className="text-[var(--neon-blue)]"> ./services/*</span>
            </code>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-[var(--neon-blue)]">{"<"}</span>
            <span className="text-white">{t("services.title")} </span>
            <span className="text-[var(--neon-pink)]">{" />"}</span>
          </h1>

          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`group relative rounded-xl bg-[var(--card)]/80 backdrop-blur-sm border ${service.borderClass} overflow-hidden transition-all duration-500`}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to bottom right, transparent, ${service.colorVar}10)` }}
                />

                <div className="relative z-10 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left side - Info */}
                    <div>
                      {/* Icon and title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-lg border flex items-center justify-center ${service.iconBgClass} transition-shadow duration-300`}
                          style={{ boxShadow: `0 0 0px ${service.colorVar}` }}
                          onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 30px ${service.colorVar}`}
                          onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${service.colorVar}`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <span className={`text-xs font-mono ${service.tagClass} tracking-wider`}>
                            {`0${index + 1}`}
                          </span>
                          <h2 className={`text-2xl md:text-3xl font-bold ${service.titleClass || "text-white"}`}>
                            {service.title}
                          </h2>
                          <p className={`text-sm font-mono ${service.tagClass}`}>
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--foreground)]/70 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-mono rounded border ${service.techClass}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Features */}
                    <div className="bg-[var(--background)]/50 rounded-lg p-6 border border-[var(--border)]">
                      <h3 className="text-sm font-mono text-[var(--muted)] mb-4 tracking-wider">
                        {"// CAPABILITIES"}
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${service.dotClass}`}
                              style={{ boxShadow: `0 0 6px ${service.colorVar}` }}
                            />
                            <span className="text-[var(--foreground)]/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${service.colorVar}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-[var(--card)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"{"}</span>
              <span className="text-white"> {t("services.ourProcess")} </span>
              <span className="text-[var(--neon-blue)]">{"}"}</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono px-4">
              {t("services.processSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative group">
                <div className="relative z-10 p-4 sm:p-6 rounded-lg bg-[var(--background)]/50 border border-[var(--border)] hover:border-[var(--neon-purple)]/50 transition-all duration-300 h-full">
                  <div className="text-2xl sm:text-4xl font-black text-[var(--neon-purple)] mb-1 sm:mb-2 font-mono" style={{ textShadow: '0 0 10px var(--neon-purple)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground)]/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"["}</span>
              <span className="text-white"> {t("services.techStack")} </span>
              <span className="text-[var(--neon-pink)]">{"]"}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
              {t("services.techStackSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Unity", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma"].map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-lg bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300 text-center group"
              >
                <span className="text-sm font-mono text-[var(--foreground)]/70 group-hover:text-[var(--neon-blue)] transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-pink)] to-[var(--neon-purple)] p-[2px] rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-2xl" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {t("services.readyToStart")}
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 text-lg">
                  {t("services.ctaDesc")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-black hover:opacity-90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-blue), 0 0 60px var(--neon-pink)" }}
                >
                  <span className="mr-2">{">>>"}</span>
                  {t("services.getInTouch")}
                  <span className="ml-2">{"<<<"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
