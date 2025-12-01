"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type Category = "all" | "web" | "games" | "mobile" | "design";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  tags: string[];
  link?: string;
  year: string;
  status: "completed" | "in-progress" | "concept" | "coming-soon";
}

const projects: Project[] = [
  {
    id: 1,
    title: "FirstIt Academy",
    description: "Educational platform for IT courses with interactive lessons, progress tracking, and certification system.",
    category: "web",
    image: "/projects/firstit.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    link: "https://1it.uz/ru",
    year: "2024",
    status: "completed",
  },
  {
    id: 3,
    title: "BI3 Website",
    description: "Modern cyberpunk-styled portfolio website with animations, i18n support, and responsive design.",
    category: "web",
    image: "/projects/bi3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "/",
    year: "2024",
    status: "completed",
  },
  {
    id: 4,
    title: "TaskFlow Mobile",
    description: "Productivity app for task management with AI-powered scheduling, team collaboration, and analytics dashboard.",
    category: "mobile",
    image: "/projects/taskflow.jpg",
    tags: ["React Native", "Firebase", "AI/ML"],
    year: "2025",
    status: "coming-soon",
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    description: "Health and fitness mobile app with workout plans, nutrition tracking, and progress visualization.",
    category: "mobile",
    image: "/projects/fitness.jpg",
    tags: ["Flutter", "Dart", "HealthKit"],
    year: "2025",
    status: "coming-soon",
  },
  {
    id: 6,
    title: "InChain",
    description: "Decentralized blockchain platform for secure transactions and smart contract deployment.",
    category: "web",
    image: "/projects/inchain.jpg",
    tags: ["Solidity", "Web3.js", "Ethereum", "React"],
    year: "2025",
    status: "coming-soon",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: "text-[var(--neon-green)] border-[var(--neon-green)]/30 bg-[var(--neon-green)]/10",
    "in-progress": "text-[var(--neon-blue)] border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10",
    concept: "text-[var(--neon-purple)] border-[var(--neon-purple)]/30 bg-[var(--neon-purple)]/10",
    "coming-soon": "text-[var(--neon-pink)] border-[var(--neon-pink)]/30 bg-[var(--neon-pink)]/10",
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    concept: "Concept",
    "coming-soon": "Coming Soon",
  };

  const categoryColors: Record<Category, string> = {
    all: "var(--neon-blue)",
    web: "var(--neon-blue)",
    games: "var(--neon-pink)",
    mobile: "var(--neon-purple)",
    design: "var(--neon-green)",
  };

  const CardWrapper = project.link ? 'a' : 'div';
  const cardProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper {...cardProps} className="group relative rounded-xl overflow-hidden cyber-border-animated card-hover bg-[var(--card)] block cursor-pointer">
      {/* Project Image Placeholder */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${categoryColors[project.category]}20 0%, var(--card) 100%)`
        }}
      >
        {/* Placeholder pattern */}
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-6xl font-black opacity-20"
            style={{ color: categoryColors[project.category] }}
          >
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono border ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </div>

        {/* Year badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono border border-white/20 bg-black/50 text-white/70">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--muted)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-mono uppercase tracking-wider"
            style={{ color: categoryColors[project.category] }}
          >
            {project.category}
          </span>
          {project.link ? (
            <span className="flex items-center gap-2 text-sm text-[var(--neon-blue)] group-hover:text-[var(--neon-pink)] transition-colors">
              <span>View Live</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          ) : (
            <span className="text-sm text-[var(--muted)] font-mono">
              [Details Soon]
            </span>
          )}
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${categoryColors[project.category]}, transparent)` }}
      />
    </CardWrapper>
  );
}

export default function WorksPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
    {
      key: "all",
      label: t("works.allProjects"),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      key: "web",
      label: t("works.web"),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      key: "games",
      label: t("works.gamesFilter"),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "mobile",
      label: t("works.mobile"),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: "design",
      label: t("works.design"),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-pink)]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Terminal badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
              <span className="text-sm font-mono text-[var(--neon-blue)]">
                {t("works.terminalPath")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[var(--neon-blue)]">{"<"}</span>
              {t("works.title")}
              <span className="text-[var(--neon-pink)]">{" />"}</span>
            </h1>

            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              {t("works.subtitle")} <span className="text-[var(--neon-blue)]">{t("works.websites")}</span>,{" "}
              <span className="text-[var(--neon-pink)]">{t("works.games")}</span>,{" "}
              <span className="text-[var(--neon-purple)]">{t("works.mobileApps")}</span>, {t("works.designs")}{" "}
              {t("works.weCrafted")}
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex justify-center gap-8 md:gap-16 py-8 border-y border-[var(--border)]">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-blue)] glow-text">{projects.length}</div>
              <div className="text-sm text-[var(--muted)] font-mono">{t("works.totalProjects")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-green)] glow-text">
                {projects.filter(p => p.status === "completed").length}
              </div>
              <div className="text-sm text-[var(--muted)] font-mono">{t("works.completed")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-pink)] glow-text">
                {projects.filter(p => p.status === "coming-soon").length}
              </div>
              <div className="text-sm text-[var(--muted)] font-mono">{t("works.comingSoon")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-[var(--neon-blue)] text-black shadow-[0_0_20px_var(--neon-blue)]"
                    : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--neon-blue)]/50 hover:text-[var(--neon-blue)]"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  activeCategory === cat.key
                    ? "bg-black/20 text-black"
                    : "bg-[var(--border)] text-[var(--muted)]"
                }`}>
                  {cat.key === "all"
                    ? projects.length
                    : projects.filter(p => p.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-[var(--muted)] font-mono">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("works.haveProject")} <span className="text-[var(--neon-blue)] glow-text">{t("works.projectInMind")}</span> {t("works.inMind")}
          </h2>
          <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            {t("works.ctaDesc")}
          </p>
          <Link
            href="/contact"
            className="cyber-button inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-[var(--neon-blue)] text-black hover:bg-[var(--neon-blue)]/90 transition-all hover:scale-105 glow"
          >
            <span className="mr-2">{">"}</span>
            {t("works.startProject")}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
