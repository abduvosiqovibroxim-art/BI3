"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Interactive Design Tool Demo
function DesignToolDemo() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "components">("colors");
  const [selectedColor, setSelectedColor] = useState("#6366f1");
  const [selectedFont, setSelectedFont] = useState("Inter");

  const colorPalettes = [
    { name: "Primary", colors: ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ede9fe"] },
    { name: "Success", colors: ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"] },
    { name: "Warning", colors: ["#f59e0b", "#fbbf24", "#fcd34d", "#fde68a", "#fef3c7"] },
    { name: "Error", colors: ["#ef4444", "#f87171", "#fca5a5", "#fecaca", "#fee2e2"] },
  ];

  const fonts = [
    { name: "Inter", style: "font-sans", sample: "The quick brown fox" },
    { name: "Roboto Mono", style: "font-mono", sample: "const code = true;" },
    { name: "Playfair", style: "font-serif", sample: "Elegant Headlines" },
  ];

  const components = [
    { name: "Button", preview: "primary" },
    { name: "Card", preview: "card" },
    { name: "Input", preview: "input" },
  ];

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] border border-[var(--neon-pink)]/30">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[var(--neon-pink)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--neon-purple)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d1a]/80 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs font-mono text-[var(--neon-pink)]">BI3 Design Studio</div>
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs">
            <span>Figma</span>
            <span>•</span>
            <span>Auto-save</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex border-b border-[var(--border)] bg-[#12121f]/80">
          {[
            { id: "colors", label: "Colors", icon: "🎨" },
            { id: "typography", label: "Type", icon: "Aa" },
            { id: "components", label: "Components", icon: "◻️" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono transition-all ${
                activeTab === tab.id
                  ? "text-[var(--neon-pink)] border-b-2 border-[var(--neon-pink)] bg-[var(--neon-pink)]/5"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto game-scrollbar">
          {activeTab === "colors" && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-[var(--muted)] mb-2">// Color Palettes</div>
              {colorPalettes.map((palette) => (
                <div key={palette.name} className="space-y-2">
                  <div className="text-[10px] font-medium text-white">{palette.name}</div>
                  <div className="flex gap-1">
                    {palette.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-lg transition-transform hover:scale-110 ${
                          selectedColor === color ? "ring-2 ring-white ring-offset-2 ring-offset-[#1a1a2e]" : ""
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Preview */}
              <div className="mt-4 p-4 rounded-lg bg-[#0d0d1a] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--muted)] mb-2">Preview</div>
                <button
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: selectedColor }}
                >
                  Primary Button
                </button>
              </div>
            </div>
          )}

          {activeTab === "typography" && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-[var(--muted)] mb-2">// Font Selection</div>
              {fonts.map((font) => (
                <button
                  key={font.name}
                  onClick={() => setSelectedFont(font.name)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    selectedFont === font.name
                      ? "border-[var(--neon-pink)] bg-[var(--neon-pink)]/10"
                      : "border-[var(--border)] hover:border-[var(--neon-pink)]/50"
                  }`}
                >
                  <div className="text-[10px] text-[var(--muted)] mb-1">{font.name}</div>
                  <div className={`text-lg text-white ${font.style}`}>{font.sample}</div>
                </button>
              ))}

              {/* Type scale */}
              <div className="mt-4 p-4 rounded-lg bg-[#0d0d1a] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--muted)] mb-3">Type Scale</div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">Heading 1</div>
                  <div className="text-xl font-semibold text-white">Heading 2</div>
                  <div className="text-base text-white">Body text</div>
                  <div className="text-sm text-[var(--muted)]">Caption</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "components" && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-[var(--muted)] mb-2">// UI Components</div>

              {/* Button variants */}
              <div className="p-4 rounded-lg bg-[#0d0d1a] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--muted)] mb-3">Buttons</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-3 py-1.5 rounded-lg text-white text-xs font-medium"
                    style={{ backgroundColor: selectedColor }}
                  >
                    Primary
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-white text-xs font-medium bg-transparent border border-current" style={{ color: selectedColor }}>
                    Outline
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ color: selectedColor, backgroundColor: `${selectedColor}20` }}>
                    Ghost
                  </button>
                </div>
              </div>

              {/* Card */}
              <div className="p-4 rounded-lg bg-[#0d0d1a] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--muted)] mb-3">Card</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-full h-16 rounded bg-gradient-to-r from-[var(--neon-pink)]/20 to-[var(--neon-purple)]/20 mb-2" />
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-1" />
                  <div className="h-2 w-1/2 bg-white/10 rounded" />
                </div>
              </div>

              {/* Input */}
              <div className="p-4 rounded-lg bg-[#0d0d1a] border border-[var(--border)]">
                <div className="text-[10px] text-[var(--muted)] mb-3">Input</div>
                <div className="space-y-2">
                  <div className="text-[10px] text-white">Email</div>
                  <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-xs text-[var(--muted)]">
                    you@example.com
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="px-3 py-1.5 bg-[var(--neon-pink)] text-[10px] font-mono text-white flex items-center justify-between">
          <span>Design System v2.0</span>
          <span>4 components • 16 colors • 3 fonts</span>
        </div>
      </div>
    </div>
  );
}

export default function DesignPage() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "design.uiDesign",
      descKey: "design.uiDesignDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      titleKey: "design.uxResearch",
      descKey: "design.uxResearchDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      titleKey: "design.wireframes",
      descKey: "design.wireframesDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      titleKey: "design.prototyping",
      descKey: "design.prototypingDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titleKey: "design.designSystems",
      descKey: "design.designSystemsDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      titleKey: "design.branding",
      descKey: "design.brandingDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  const features = [
    { titleKey: "design.userCentered", descKey: "design.userCenteredDesc", icon: "👤" },
    { titleKey: "design.accessible", descKey: "design.accessibleDesc", icon: "♿" },
    { titleKey: "design.consistent", descKey: "design.consistentDesc", icon: "🎯" },
    { titleKey: "design.responsive", descKey: "design.responsiveDesc", icon: "📱" },
    { titleKey: "design.delightful", descKey: "design.delightfulDesc", icon: "✨" },
    { titleKey: "design.scalable", descKey: "design.scalableDesc", icon: "📐" },
  ];

  const tools = {
    designTools: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator"],
    prototypeTools: ["Figma", "Principle", "ProtoPie", "Framer", "InVision"],
    collaborationTools: ["Notion", "Miro", "FigJam", "Slack", "Loom"],
    devHandoff: ["Zeplin", "Figma Dev Mode", "Storybook", "CSS Export"],
  };

  const processSteps = [
    { titleKey: "design.research", descKey: "design.researchDesc", icon: "🔍" },
    { titleKey: "design.ideate", descKey: "design.ideateDesc", icon: "💡" },
    { titleKey: "design.designStep", descKey: "design.designStepDesc", icon: "🎨" },
    { titleKey: "design.handoff", descKey: "design.handoffDesc", icon: "🤝" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-pink)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-purple)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
            <span className="text-[var(--neon-pink)]">design</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 mb-6">
                <svg className="w-5 h-5 text-[var(--neon-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span className="text-sm font-mono text-[var(--neon-pink)]">DESIGN_STUDIO.exe</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-[var(--neon-pink)]">{t("design.title")}</span>
                <br />
                <span className="text-white">{t("design.title2")}</span>
              </h1>

              <p className="text-xl text-[var(--foreground)]/70 mb-8 leading-relaxed">
                {t("services.uiuxDesignDesc")} {t("design.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-[var(--neon-pink)] text-black hover:bg-[var(--neon-pink)]/90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-pink)" }}
                >
                  <span className="mr-2">{">"}</span>
                  {t("design.startProject")}
                </Link>
                <Link
                  href="/works"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-[var(--neon-pink)]/50 text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10 transition-all"
                >
                  {t("design.viewWorks")}
                </Link>
              </div>
            </div>

            {/* Interactive Design Tool Demo */}
            <div className="relative">
              <DesignToolDemo />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[var(--muted)]">
                  {t("design.interactiveDemo")}
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
              <span className="text-[var(--neon-pink)]">{"<"}</span>
              <span className="text-white"> {t("design.whatWeCreate")} </span>
              <span className="text-[var(--neon-purple)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("design.whatWeCreateDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 flex items-center justify-center text-[var(--neon-pink)] mb-4 group-hover:shadow-[0_0_20px_var(--neon-pink)] transition-shadow">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-pink)] transition-colors">
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

      {/* Design Principles */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"["}</span>
              <span className="text-white"> {t("design.features")} </span>
              <span className="text-[var(--neon-pink)]">{"]"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono text-sm">
              {t("design.featuresDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white mb-1">{t(feature.titleKey)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-pink)]">{"{"}</span>
              <span className="text-white"> {t("design.tools")} </span>
              <span className="text-[var(--neon-purple)]">{"}"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("design.toolsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(tools).map(([category, toolList]) => (
              <div key={category} className="p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)]">
                <h3 className="text-sm font-mono text-[var(--neon-pink)] mb-4 uppercase tracking-wider">
                  {t(`design.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolList.map(tool => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-mono rounded bg-[var(--neon-pink)]/10 text-[var(--neon-pink)] border border-[var(--neon-pink)]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-purple)]">{"<"}</span>
              <span className="text-white"> {t("design.devProcess")} </span>
              <span className="text-[var(--neon-pink)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("design.devProcessDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[var(--neon-pink)]/50 to-[var(--neon-purple)]/50 z-0" />
                )}

                <div className="relative z-10 p-6 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-pink)]/50 transition-all">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-xs font-mono text-[var(--neon-pink)]/60 mb-2">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-pink)] p-[2px] rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-2xl" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-white">{t("design.readyTo")} </span>
                  <span className="text-[var(--neon-pink)]">{t("design.standOut")}</span>
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 text-lg">
                  {t("design.ctaDesc")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-black hover:opacity-90 transition-all hover:scale-105"
                    style={{ boxShadow: "0 0 30px var(--neon-pink), 0 0 60px var(--neon-purple)" }}
                  >
                    <span className="mr-2">{">>>"}</span>
                    {t("design.startProjectBtn")}
                    <span className="ml-2">{"<<<"}</span>
                  </Link>
                  <Link
                    href="/works"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg border border-[var(--neon-pink)]/50 text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10 transition-all"
                  >
                    {t("design.viewPortfolio")}
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
