"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const teamMemberKeys = [
  {
    nameKey: "team.member1.name",
    roleKey: "team.member1.role",
    image: "/ibrohim-a.jpg",
    bioKey: "team.member1.bio",
    skillKeys: ["team.skill.leadership", "team.skill.strategy", "team.skill.business"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    nameKey: "team.member2.name",
    roleKey: "team.member2.role",
    image: "/ibrohim-r.jpg",
    bioKey: "team.member2.bio",
    skillKeys: ["team.skill.agile", "team.skill.scrum", "team.skill.management", "team.skill.planning"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    nameKey: "team.member3.name",
    roleKey: "team.member3.role",
    image: "/ibrohim-u.jpg",
    bioKey: "team.member3.bio",
    skillKeys: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    nameKey: "team.member4.name",
    roleKey: "team.member4.role",
    image: "/begzod.jpg",
    bioKey: "team.member4.bio",
    skillKeys: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    nameKey: "team.member5.name",
    roleKey: "team.member5.role",
    image: "/Ibrohim-i.jpg",
    bioKey: "team.member5.bio",
    skillKeys: ["Solidity", "Web3.js", "Ethereum", "team.skill.smartContracts"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const values = [
    {
      title: t("about.innovation"),
      description: t("about.innovationDesc"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: t("about.quality"),
      description: t("about.qualityDesc"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t("about.collaboration"),
      description: t("about.collaborationDesc"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: t("about.growth"),
      description: t("about.growthDesc"),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden cyber-grid scanlines">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-pink)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[var(--neon-blue)]/10 rounded-full animate-spin" style={{ animationDuration: "40s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Terminal style header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--neon-blue)]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse shadow-[0_0_8px_var(--neon-green)]" />
            <code className="text-sm font-mono">
              <span className="text-[var(--neon-blue)]">$</span>
              <span className="text-[var(--muted)]"> cat</span>
              <span className="text-[var(--neon-pink)]"> /about/bi3.md</span>
            </code>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-[var(--neon-blue)]">{"<"}</span>
            <span className="text-white">{t("about.title")}</span>
            <span className="text-[var(--neon-pink)]">{" />"}</span>
            <span className="block mt-2 text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-pink)] to-[var(--neon-purple)] bg-clip-text text-transparent drop-shadow-[0_0_30px_var(--neon-blue)]">
              BI3
            </span>
          </h1>

          {/* Subtitle with cyber style */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-light">
              <span className="text-[var(--neon-blue)]">{t("about.subtitle").split(",")[0]}</span>
            </p>
            <p className="text-lg text-[var(--muted)] mt-2 font-mono">
              {"// building the future one project at a time"}
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            <div className="px-4 py-2 bg-[var(--card)]/60 rounded border border-[var(--neon-blue)]/20">
              <span className="text-2xl font-bold text-[var(--neon-blue)] drop-shadow-[0_0_10px_var(--neon-blue)]">5</span>
              <span className="text-sm text-[var(--muted)] ml-2">{t("home.hackers")}</span>
            </div>
            <div className="px-4 py-2 bg-[var(--card)]/60 rounded border border-[var(--neon-pink)]/20">
              <span className="text-2xl font-bold text-[var(--neon-pink)] drop-shadow-[0_0_10px_var(--neon-pink)]">14-21</span>
              <span className="text-sm text-[var(--muted)] ml-2">{t("home.years")}</span>
            </div>
            <div className="px-4 py-2 bg-[var(--card)]/60 rounded border border-[var(--neon-purple)]/20">
              <span className="text-2xl font-bold text-[var(--neon-purple)] drop-shadow-[0_0_10px_var(--neon-purple)]">UZ</span>
              <span className="text-sm text-[var(--muted)] ml-2">Uzbekistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-[var(--neon-blue)]">{"{"}</span>
              <span className="text-white"> {t("about.ourStory")} </span>
              <span className="text-[var(--neon-pink)]">{"}"}</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-[var(--foreground)]/90">
                {t("about.storyP1")}
              </p>
              <p className="text-[var(--foreground)]/90">
                {t("about.storyP2")}
              </p>
              <p className="text-[var(--foreground)]/90">
                {t("about.storyP3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-pink)]">{"<"}</span>
              <span className="text-white"> {t("about.leadingBi3")} </span>
              <span className="text-[var(--neon-blue)]">{" />"}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
              {"// Five talents, five unique perspectives, one shared mission"}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {teamMemberKeys.map((member, index) => {
              const name = t(member.nameKey);
              const role = t(member.roleKey);
              const bio = t(member.bioKey);
              const skills = member.skillKeys.map(sk => sk.startsWith("team.") ? t(sk) : sk);

              return (
                <div
                  key={index}
                  className={`group relative flip-card cursor-pointer ${flippedCard === index ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flip-card-inner">
                    {/* Front - Photo */}
                    <div className="flip-card-front rounded-2xl overflow-hidden border border-[var(--border)] group-hover:border-[var(--neon-blue)]/50 transition-colors">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                          {name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Name and role at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-0.5">{name}</h3>
                        <p className="text-[var(--neon-pink)] text-xs sm:text-sm font-medium glow-text-pink">{role}</p>
                      </div>
                    </div>

                    {/* Back - Info */}
                    <div className="flip-card-back rounded-2xl overflow-hidden border border-[var(--neon-blue)]/50 bg-[var(--card)] p-3 sm:p-4 flex flex-col justify-center">
                      {/* Cyber grid background */}
                      <div className="absolute inset-0 cyber-grid opacity-20" />

                      <div className="relative z-10">
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{name}</h3>
                        <p className="text-[var(--neon-pink)] text-xs sm:text-sm font-medium mb-2 sm:mb-3 glow-text-pink">{role}</p>

                        <p className="text-[10px] sm:text-xs text-white/80 mb-2 sm:mb-3 line-clamp-4">{bio}</p>

                        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] rounded-full bg-[var(--neon-blue)]/20 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-[var(--neon-blue)] transition-colors"
                            aria-label={`${name}'s GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-[var(--neon-pink)] transition-colors"
                            aria-label={`${name}'s LinkedIn`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                          </a>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ boxShadow: 'inset 0 0 30px var(--neon-blue)' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"["}</span>
              <span className="text-white"> {t("about.ourValues")} </span>
              <span className="text-[var(--neon-pink)]">{"]"}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
              {t("about.valuesSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const colors = [
                { border: "var(--neon-blue)", bg: "var(--neon-blue)" },
                { border: "var(--neon-pink)", bg: "var(--neon-pink)" },
                { border: "var(--neon-purple)", bg: "var(--neon-purple)" },
                { border: "var(--neon-blue)", bg: "var(--neon-blue)" },
              ];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-[var(--card)]/80 border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: `color-mix(in srgb, ${color.border} 30%, transparent)`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${color.bg} 15%, transparent)`,
                      color: color.bg,
                      boxShadow: `0 0 20px color-mix(in srgb, ${color.bg} 30%, transparent)`,
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: color.bg }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        {/* Animated background orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[var(--neon-blue)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[var(--neon-pink)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"{"}</span>
              <span className="text-white"> {t("about.ourPartners")} </span>
              <span className="text-[var(--neon-pink)]">{"}"}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
              {t("about.partnersSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://natex.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-xl bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--neon-blue)]/30 transition-all duration-300 hover:scale-105 hover:border-[var(--neon-blue)] overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/0 to-[var(--neon-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--neon-blue)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_var(--neon-blue)] transition-shadow duration-300 overflow-hidden p-2">
                  <Image src="/natex.png" alt="Natex Labs" width={64} height={64} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[var(--neon-blue)] drop-shadow-[0_0_10px_var(--neon-blue)]">Natex Labs</h3>
                <p className="text-[var(--foreground)]/70 text-center">
                  A leading technology company focused on innovative solutions. BI3 operates as part of the Natex Labs
                  ecosystem, bringing youthful energy and fresh perspectives to collaborative projects.
                </p>
              </div>
            </a>
            <a
              href="https://1it.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-xl bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--neon-pink)]/30 transition-all duration-300 hover:scale-105 hover:border-[var(--neon-pink)] overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-pink)]/0 to-[var(--neon-pink)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--neon-pink)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_var(--neon-pink)] transition-shadow duration-300 overflow-hidden p-2">
                  <Image src="/FIT.png" alt="FirstIt" width={64} height={64} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[var(--neon-pink)] drop-shadow-[0_0_10px_var(--neon-pink)]">FirstIt</h3>
                <p className="text-[var(--foreground)]/70 text-center">
                  Uzbekistan&apos;s growing tech community hub. Our association with FirstIt connects us to the local
                  tech ecosystem, enabling knowledge sharing and community growth.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"@"}</span>
              <span className="text-white"> {t("about.basedIn")} </span>
              <span className="text-[var(--neon-blue)] drop-shadow-[0_0_10px_var(--neon-blue)]">{t("about.tashkent").split(",")[0]}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto font-mono">
              {t("about.locationSubtitle")}
            </p>
          </div>

          {/* Radar Style Location Display */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Radar SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <filter id="radarGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0" />
                    <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0.6" />
                  </linearGradient>
                  <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background glow */}
                <circle cx="200" cy="200" r="180" fill="url(#radarBg)" />

                {/* Radar circles */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="var(--neon-blue)" strokeWidth="1" opacity="0.3" />
                <circle cx="200" cy="200" r="135" fill="none" stroke="var(--neon-blue)" strokeWidth="1" opacity="0.25" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="var(--neon-blue)" strokeWidth="1" opacity="0.2" />
                <circle cx="200" cy="200" r="45" fill="none" stroke="var(--neon-blue)" strokeWidth="1" opacity="0.15" />

                {/* Cross lines */}
                <line x1="200" y1="20" x2="200" y2="380" stroke="var(--neon-blue)" strokeWidth="0.5" opacity="0.2" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="var(--neon-blue)" strokeWidth="0.5" opacity="0.2" />
                <line x1="73" y1="73" x2="327" y2="327" stroke="var(--neon-blue)" strokeWidth="0.5" opacity="0.15" />
                <line x1="327" y1="73" x2="73" y2="327" stroke="var(--neon-blue)" strokeWidth="0.5" opacity="0.15" />

                {/* Rotating sweep */}
                <g style={{ transformOrigin: "200px 200px", animation: "spin 4s linear infinite" }}>
                  <path d="M200,200 L200,20 A180,180 0 0,1 350,110 Z" fill="url(#sweepGradient)" opacity="0.4" />
                </g>

                {/* Pulse rings from center */}
                <circle cx="200" cy="200" r="30" fill="none" stroke="var(--neon-pink)" strokeWidth="2" opacity="0">
                  <animate attributeName="r" values="20;180" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="30" fill="none" stroke="var(--neon-pink)" strokeWidth="2" opacity="0">
                  <animate attributeName="r" values="20;180" dur="3s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="200" cy="200" r="30" fill="none" stroke="var(--neon-pink)" strokeWidth="2" opacity="0">
                  <animate attributeName="r" values="20;180" dur="3s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" begin="2s" />
                </circle>

                {/* Center point - Tashkent */}
                <g filter="url(#radarGlow)">
                  <circle cx="200" cy="200" r="12" fill="var(--neon-pink)" opacity="0.3" />
                  <circle cx="200" cy="200" r="8" fill="var(--neon-pink)" />
                  <circle cx="200" cy="200" r="3" fill="white" />
                </g>

                {/* Blinking detection points */}
                <circle cx="280" cy="120" r="4" fill="var(--neon-blue)" filter="url(#radarGlow)">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="220" r="3" fill="var(--neon-purple)" filter="url(#radarGlow)">
                  <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="140" cy="280" r="3" fill="var(--neon-blue)" filter="url(#radarGlow)">
                  <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="100" cy="150" r="4" fill="var(--neon-purple)" filter="url(#radarGlow)">
                  <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
                </circle>
                <circle cx="250" cy="300" r="3" fill="var(--neon-blue)" filter="url(#radarGlow)">
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0.8s" />
                </circle>

                {/* Direction labels */}
                <text x="200" y="15" textAnchor="middle" fill="var(--neon-blue)" fontSize="10" fontFamily="monospace" opacity="0.5">N</text>
                <text x="200" y="395" textAnchor="middle" fill="var(--neon-blue)" fontSize="10" fontFamily="monospace" opacity="0.5">S</text>
                <text x="10" y="204" textAnchor="middle" fill="var(--neon-blue)" fontSize="10" fontFamily="monospace" opacity="0.5">W</text>
                <text x="390" y="204" textAnchor="middle" fill="var(--neon-blue)" fontSize="10" fontFamily="monospace" opacity="0.5">E</text>
              </svg>

              {/* Location info overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 text-center">
                <div className="px-6 py-3 bg-[var(--card)]/90 backdrop-blur-sm rounded-lg border border-[var(--neon-pink)]/50" style={{ boxShadow: "0 0 20px rgba(255, 0, 128, 0.2)" }}>
                  <h3 className="text-xl font-bold text-[var(--neon-pink)] font-mono tracking-wider">TASHKENT</h3>
                  <p className="text-sm text-[var(--neon-blue)] font-mono">UZBEKISTAN</p>
                </div>
              </div>

              {/* Corner data displays */}
              <div className="absolute top-4 left-4 text-xs font-mono">
                <div className="text-[var(--neon-blue)] opacity-70">LAT</div>
                <div className="text-[var(--neon-pink)]">41.2995° N</div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-right">
                <div className="text-[var(--neon-blue)] opacity-70">LONG</div>
                <div className="text-[var(--neon-pink)]">69.2401° E</div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-mono">
                <div className="text-[var(--neon-blue)] opacity-70">REGION</div>
                <div className="text-[var(--neon-purple)]">CENTRAL ASIA</div>
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-right">
                <div className="text-[var(--neon-blue)] opacity-70">UTC</div>
                <div className="text-[var(--neon-green)]">+5:00</div>
              </div>

              {/* Status indicator */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
                <span className="text-xs font-mono text-[var(--neon-green)]">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Info text */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[var(--foreground)]/70 text-lg">
              {t("about.availableWorldwide")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[var(--accent)] to-purple-600 p-12 md:p-16 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("services.readyToStart")}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                {t("services.ctaDesc")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-white text-[var(--accent-dark)] hover:bg-white/90 transition-all hover:scale-105"
              >
                {t("services.getInTouch")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
