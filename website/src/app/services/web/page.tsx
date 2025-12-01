"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Interactive Website Builder Demo Component
function WebsiteBuilderDemo() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#6366f1");
  const [isTyping, setIsTyping] = useState(true);
  const [codeLines, setCodeLines] = useState(0);

  // Simulate typing effect
  useEffect(() => {
    if (activeTab === "code") {
      setCodeLines(0);
      const interval = setInterval(() => {
        setCodeLines(prev => {
          if (prev >= 12) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const codeContent = [
    '<span class="text-pink-400">&lt;div</span> <span class="text-yellow-300">className</span>=<span class="text-green-400">"hero"</span><span class="text-pink-400">&gt;</span>',
    '  <span class="text-pink-400">&lt;h1</span> <span class="text-yellow-300">className</span>=<span class="text-green-400">"title"</span><span class="text-pink-400">&gt;</span>',
    '    Welcome to <span class="text-purple-400">BI3</span>',
    '  <span class="text-pink-400">&lt;/h1&gt;</span>',
    '  <span class="text-pink-400">&lt;p</span> <span class="text-yellow-300">className</span>=<span class="text-green-400">"subtitle"</span><span class="text-pink-400">&gt;</span>',
    '    Building the future',
    '  <span class="text-pink-400">&lt;/p&gt;</span>',
    '  <span class="text-pink-400">&lt;button</span>',
    '    <span class="text-yellow-300">onClick</span>={handleClick}',
    '    <span class="text-yellow-300">className</span>=<span class="text-green-400">"cta-btn"</span>',
    '  <span class="text-pink-400">&gt;</span>',
    '    Get Started',
    '  <span class="text-pink-400">&lt;/button&gt;</span>',
    '<span class="text-pink-400">&lt;/div&gt;</span>',
  ];

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0d1025] to-[#070812] border border-[var(--neon-purple)]/30">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--neon-purple)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--neon-blue)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      {/* Browser chrome */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Browser header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border-b border-[var(--border)]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a0a1a] border border-[var(--border)] text-xs font-mono text-[var(--muted)]">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>https://your-website.bi3.dev</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--border)] bg-[#12121f]">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-xs font-mono transition-all ${
              activeTab === "preview"
                ? "text-[var(--neon-purple)] border-b-2 border-[var(--neon-purple)] bg-[var(--neon-purple)]/5"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 text-xs font-mono transition-all ${
              activeTab === "code"
                ? "text-[var(--neon-purple)] border-b-2 border-[var(--neon-purple)] bg-[var(--neon-purple)]/5"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            {"</>"}Code
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2 px-4">
            <span className="text-[10px] text-[var(--muted)]">Theme:</span>
            <div className="flex gap-1">
              {["#6366f1", "#ec4899", "#10b981", "#f59e0b"].map(color => (
                <button
                  key={color}
                  onClick={() => setPrimaryColor(color)}
                  className={`w-4 h-4 rounded-full border-2 transition-transform ${
                    primaryColor === color ? "border-white scale-110" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "preview" ? (
            /* Live Preview */
            <div className="h-full p-4 overflow-y-auto game-scrollbar">
              {/* Mini website preview */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* Mini header */}
                <div className="px-3 py-2 border-b flex items-center justify-between" style={{ borderColor: `${primaryColor}20` }}>
                  <div className="font-bold text-sm" style={{ color: primaryColor }}>BI3</div>
                  <div className="flex gap-3 text-[10px] text-gray-500">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                  </div>
                </div>

                {/* Mini hero */}
                <div
                  className={`p-4 text-center transition-all duration-300 ${
                    selectedElement === "hero" ? "ring-2 ring-offset-2" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}05)`,
                    '--tw-ring-color': primaryColor
                  } as React.CSSProperties}
                  onClick={() => setSelectedElement(selectedElement === "hero" ? null : "hero")}
                >
                  <h2 className="text-lg font-bold text-gray-800 mb-1">Welcome to BI3</h2>
                  <p className="text-xs text-gray-500 mb-2">Building the future, one line at a time</p>
                  <button
                    className="px-3 py-1 text-xs text-white rounded-md transition-transform hover:scale-105"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Mini features */}
                <div className="p-3 grid grid-cols-3 gap-2">
                  {["Fast", "Secure", "Modern"].map((feature, i) => (
                    <div
                      key={feature}
                      className="p-2 text-center rounded bg-gray-50 transition-all hover:shadow-md cursor-pointer"
                    >
                      <div
                        className="w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center text-white text-[10px]"
                        style={{ backgroundColor: primaryColor }}
                      >
                        {i + 1}
                      </div>
                      <div className="text-[10px] font-medium text-gray-700">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edit hint */}
              <div className="mt-3 text-center">
                <span className="text-[10px] font-mono text-[var(--muted)]">
                  Click elements to select • Change theme above
                </span>
              </div>
            </div>
          ) : (
            /* Code View */
            <div className="h-full bg-[#0d0d1a] p-3 font-mono text-xs overflow-y-auto game-scrollbar">
              <div className="flex">
                {/* Line numbers */}
                <div className="pr-3 text-[var(--muted)] select-none border-r border-[var(--border)] mr-3">
                  {codeContent.slice(0, codeLines).map((_, i) => (
                    <div key={i} className="leading-5">{i + 1}</div>
                  ))}
                </div>
                {/* Code */}
                <div className="flex-1">
                  {codeContent.slice(0, codeLines).map((line, i) => (
                    <div
                      key={i}
                      className="leading-5 whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                  {codeLines < codeContent.length && (
                    <span className="inline-block w-2 h-4 bg-[var(--neon-purple)] animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="px-3 py-1 bg-[var(--neon-purple)] text-[10px] font-mono text-white flex items-center justify-between">
          <span>React + Next.js + TypeScript</span>
          <span>Ready</span>
        </div>
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "web.landingPages",
      descKey: "web.landingPagesDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      titleKey: "web.webApps",
      descKey: "web.webAppsDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: "web.ecommerce",
      descKey: "web.ecommerceDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      titleKey: "web.dashboards",
      descKey: "web.dashboardsDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      titleKey: "web.apis",
      descKey: "web.apisDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: "web.cms",
      descKey: "web.cmsDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  const features = [
    { titleKey: "web.responsive", descKey: "web.responsiveDesc", icon: "📱" },
    { titleKey: "web.seo", descKey: "web.seoDesc", icon: "🔍" },
    { titleKey: "web.secure", descKey: "web.secureDesc", icon: "🔒" },
    { titleKey: "web.scalable", descKey: "web.scalableDesc", icon: "📈" },
    { titleKey: "web.fast", descKey: "web.fastDesc", icon: "⚡" },
    { titleKey: "web.accessible", descKey: "web.accessibleDesc", icon: "♿" },
  ];

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "NestJS", "Python", "FastAPI"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    devops: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
  };

  const processSteps = [
    { titleKey: "web.discovery", descKey: "web.discoveryDesc", icon: "🔍" },
    { titleKey: "web.design", descKey: "web.designDesc", icon: "🎨" },
    { titleKey: "web.development", descKey: "web.developmentDesc", icon: "💻" },
    { titleKey: "web.deployment", descKey: "web.deploymentDesc", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-purple)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-blue)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-mono mb-8">
            <Link href="/" className="text-[var(--muted)] hover:text-[var(--neon-blue)] transition-colors">
              ~/home
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <Link href="/services" className="text-[var(--muted)] hover:text-[var(--neon-blue)] transition-colors">
              services
            </Link>
            <span className="text-[var(--muted)]">/</span>
            <span className="text-[var(--neon-purple)]">web</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--neon-purple)]/10 border border-[var(--neon-purple)]/30 mb-6">
                <svg className="w-5 h-5 text-[var(--neon-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm font-mono text-[var(--neon-purple)]">WEB_DEV.exe</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-[var(--neon-purple)]">{t("web.title")}</span>
                <br />
                <span className="text-white">{t("web.title2")}</span>
              </h1>

              <p className="text-xl text-[var(--foreground)]/70 mb-8 leading-relaxed">
                {t("services.webDevDesc")} {t("web.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-[var(--neon-purple)] text-black hover:bg-[var(--neon-purple)]/90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-purple)" }}
                >
                  <span className="mr-2">{">"}</span>
                  {t("web.startProject")}
                </Link>
                <Link
                  href="/works"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-[var(--neon-purple)]/50 text-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/10 transition-all"
                >
                  {t("web.viewWorks")}
                </Link>
              </div>
            </div>

            {/* Interactive Website Builder Demo */}
            <div className="relative">
              <WebsiteBuilderDemo />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[var(--muted)]">
                  {t("web.interactiveDemo")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"<"}</span>
              <span className="text-white"> {t("web.whatWeCreate")} </span>
              <span className="text-[var(--neon-blue)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("web.whatWeCreateDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-purple)]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--neon-purple)]/10 border border-[var(--neon-purple)]/30 flex items-center justify-center text-[var(--neon-purple)] mb-4 group-hover:shadow-[0_0_20px_var(--neon-purple)] transition-shadow">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-purple)] transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"["}</span>
              <span className="text-white"> {t("web.features")} </span>
              <span className="text-[var(--neon-purple)]">{"]"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono text-sm">
              {t("web.featuresDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-purple)]/50 transition-all"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white mb-1">{t(feature.titleKey)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"{"}</span>
              <span className="text-white"> {t("web.techStack")} </span>
              <span className="text-[var(--neon-blue)]">{"}"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("web.techStackDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)]">
                <h3 className="text-sm font-mono text-[var(--neon-purple)] mb-4 uppercase tracking-wider">
                  {t(`web.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border border-[var(--neon-purple)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"<"}</span>
              <span className="text-white"> {t("web.devProcess")} </span>
              <span className="text-[var(--neon-purple)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("web.devProcessDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[var(--neon-purple)]/50 to-[var(--neon-blue)]/50 z-0" />
                )}

                <div className="relative z-10 p-6 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-purple)]/50 transition-all">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-xs font-mono text-[var(--neon-purple)]/60 mb-2">
                    {`0${index + 1}`}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-[var(--muted)]">{t(step.descKey)}</p>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-purple)] p-[2px] rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-2xl" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-white">{t("web.readyTo")} </span>
                  <span className="text-[var(--neon-purple)]">{t("web.goOnline")}</span>
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 text-lg">
                  {t("web.ctaDesc")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-black hover:opacity-90 transition-all hover:scale-105"
                    style={{ boxShadow: "0 0 30px var(--neon-purple), 0 0 60px var(--neon-blue)" }}
                  >
                    <span className="mr-2">{">>>"}</span>
                    {t("web.startProjectBtn")}
                    <span className="ml-2">{"<<<"}</span>
                  </Link>
                  <Link
                    href="/works"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg border border-[var(--neon-purple)]/50 text-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/10 transition-all"
                  >
                    {t("web.viewPortfolio")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
