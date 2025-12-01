"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00f0ff";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.98 ? "#ff00ff" : "#00f0ff";
        ctx.globalAlpha = Math.random() * 0.5 + 0.1;
        ctx.fillText(text, x, y);
        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}

function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neon glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-pink)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[var(--neon-purple)]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Central hexagon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="700" height="700" viewBox="0 0 700 700" className="animate-spin hidden sm:block" style={{ animationDuration: "60s" }}>
          <defs>
            <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="var(--neon-pink)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <polygon
            points="350,50 600,175 600,425 350,550 100,425 100,175"
            fill="none"
            stroke="url(#hexGradient1)"
            strokeWidth="1"
            className="drop-shadow-[0_0_10px_var(--neon-blue)]"
          />
        </svg>
      </div>

      {/* Inner hexagon - reverse spin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="500" height="500" viewBox="0 0 500 500" className="animate-spin hidden sm:block" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
          <defs>
            <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--neon-pink)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <polygon
            points="250,30 450,130 450,330 250,430 50,330 50,130"
            fill="none"
            stroke="url(#hexGradient2)"
            strokeWidth="1"
            strokeDasharray="20,10"
            className="drop-shadow-[0_0_15px_var(--neon-pink)]"
          />
        </svg>
      </div>

      {/* Corner decorations - top left */}
      <svg className="absolute top-20 left-20 w-32 h-32 text-[var(--neon-blue)] hidden md:block" viewBox="0 0 100 100">
        <path d="M0,50 L50,0 L50,20 L20,50 L50,80 L50,100 L0,50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.5" className="animate-pulse" />
      </svg>

      {/* Corner decorations - top right */}
      <svg className="absolute top-20 right-20 w-32 h-32 text-[var(--neon-pink)] hidden md:block" viewBox="0 0 100 100">
        <path d="M100,50 L50,0 L50,20 L80,50 L50,80 L50,100 L100,50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
      </svg>

      {/* Corner decorations - bottom left */}
      <svg className="absolute bottom-20 left-20 w-32 h-32 text-[var(--neon-purple)] hidden md:block" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" className="animate-pulse" />
      </svg>

      {/* Corner decorations - bottom right */}
      <svg className="absolute bottom-20 right-20 w-32 h-32 text-[var(--neon-blue)] hidden md:block" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <polygon points="50,30 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{ animationDelay: "1s" }} />
      </svg>

      {/* Animated lines - left side */}
      <div className="absolute left-0 top-1/4 w-48 h-px bg-gradient-to-r from-[var(--neon-blue)] to-transparent animate-pulse hidden sm:block" />
      <div className="absolute left-0 top-1/3 w-32 h-px bg-gradient-to-r from-[var(--neon-pink)] to-transparent animate-pulse hidden sm:block" style={{ animationDelay: "0.5s" }} />
      <div className="absolute left-0 top-2/3 w-40 h-px bg-gradient-to-r from-[var(--neon-purple)] to-transparent animate-pulse hidden sm:block" style={{ animationDelay: "1s" }} />

      {/* Animated lines - right side */}
      <div className="absolute right-0 top-1/4 w-48 h-px bg-gradient-to-l from-[var(--neon-pink)] to-transparent animate-pulse hidden sm:block" />
      <div className="absolute right-0 top-1/3 w-32 h-px bg-gradient-to-l from-[var(--neon-blue)] to-transparent animate-pulse hidden sm:block" style={{ animationDelay: "0.5s" }} />
      <div className="absolute right-0 top-2/3 w-40 h-px bg-gradient-to-l from-[var(--neon-purple)] to-transparent animate-pulse hidden sm:block" style={{ animationDelay: "1s" }} />

      {/* Vertical scan line */}
      <div
        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--neon-blue)]/50 to-transparent"
        style={{
          animation: "scanX 8s ease-in-out infinite",
          left: "0%",
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--neon-pink)]/50 to-transparent"
        style={{
          animation: "scanY 6s ease-in-out infinite",
          top: "0%",
        }}
      />

      {/* Data nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--neon-blue)] rounded-full shadow-[0_0_10px_var(--neon-blue)] animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[var(--neon-pink)] rounded-full shadow-[0_0_10px_var(--neon-pink)] animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[var(--neon-purple)] rounded-full shadow-[0_0_10px_var(--neon-purple)] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[var(--neon-green)] rounded-full shadow-[0_0_10px_var(--neon-green)] animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Connection lines between nodes */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="var(--neon-blue)" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="var(--neon-pink)" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="75%" y1="25%" x2="66%" y2="66%" stroke="var(--neon-purple)" strokeWidth="1" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  );
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[var(--neon-blue)] rounded-full floating"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

function CyberHuntLogo() {
  return (
    <div className="relative py-8 sm:py-16">
      {/* Target/crosshair background - very dim */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-[0.04] hidden sm:block">
          {/* Outer targeting circle */}
          <circle cx="250" cy="250" r="200" fill="none" stroke="var(--neon-red)" strokeWidth="1" strokeDasharray="10,5" className="animate-spin" style={{ animationDuration: "30s", transformOrigin: "center" }} />
          <circle cx="250" cy="250" r="150" fill="none" stroke="var(--neon-purple)" strokeWidth="1" className="animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse", transformOrigin: "center" }} />
          <circle cx="250" cy="250" r="100" fill="none" stroke="var(--neon-pink)" strokeWidth="1" strokeDasharray="20,10" className="animate-spin" style={{ animationDuration: "15s", transformOrigin: "center" }} />

          {/* Crosshair lines */}
          <line x1="250" y1="0" x2="250" y2="150" stroke="var(--neon-red)" strokeWidth="1" opacity="0.2" />
          <line x1="250" y1="350" x2="250" y2="500" stroke="var(--neon-red)" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="250" x2="150" y2="250" stroke="var(--neon-red)" strokeWidth="1" opacity="0.2" />
          <line x1="350" y1="250" x2="500" y2="250" stroke="var(--neon-red)" strokeWidth="1" opacity="0.2" />

          {/* Corner brackets */}
          <path d="M50,100 L50,50 L100,50" fill="none" stroke="var(--neon-pink)" strokeWidth="1" opacity="0.3" />
          <path d="M400,50 L450,50 L450,100" fill="none" stroke="var(--neon-pink)" strokeWidth="1" opacity="0.3" />
          <path d="M50,400 L50,450 L100,450" fill="none" stroke="var(--neon-pink)" strokeWidth="1" opacity="0.3" />
          <path d="M400,450 L450,450 L450,400" fill="none" stroke="var(--neon-pink)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Glowing background - very subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[200px] bg-[#ff0040]/3 rounded-full blur-[100px]" />
      </div>

      {/* Main logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top HUD elements - dim */}
        <div className="hidden sm:flex items-center gap-4 mb-6 opacity-50">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#660020]">
            <span className="w-1.5 h-1.5 bg-[#660020]" />
            <span>TGT_LOCK</span>
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#660020]/60 via-[#660030]/30 to-transparent" />
          <div className="px-3 py-1 border border-[#660020]/40 bg-[#660020]/5 text-[#880030] text-[10px] font-mono tracking-wider">
            HUNT_MODE
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-l from-[#660020]/60 via-[#660030]/30 to-transparent" />
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#660030]">
            <span>SYS_RDY</span>
            <span className="w-1.5 h-1.5 bg-[#006630]" />
          </div>
        </div>

        {/* Main BI3 text */}
        <div className="relative">
          {/* Scan effect - subtle */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff0050]/20 to-transparent"
              style={{ animation: "scanLine 2s linear infinite" }}
            />
          </div>

          {/* Glitch layer - subtle */}
          <span
            className="absolute text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-black leading-none tracking-tight"
            style={{
              color: "#ff0050",
              animation: "huntGlitch 4s infinite",
              textShadow: "0 0 20px #ff0050",
              opacity: 0.5,
            }}
          >
            BI3
          </span>

          {/* Main text - bright gradient */}
          <span
            className="relative text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-black leading-none tracking-tight"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #ff3366 35%, #ff0066 50%, #cc0066 70%, #990066 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 15px rgba(255,0,80,0.5)) drop-shadow(0 0 30px rgba(200,0,100,0.3))",
            }}
          >
            BI3
          </span>

          {/* Horizontal cut lines through text - very subtle */}
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#ff0050]/10" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-[#ff0080]/8" />
        </div>

        {/* Bottom HUD bar - dim */}
        <div className="mt-4 sm:mt-8 flex items-center gap-2 opacity-60">
          {/* Left bracket */}
          <svg width="20" height="40" viewBox="0 0 20 40" className="text-[#550020]/70 hidden sm:block">
            <path d="M15,0 L5,0 L5,40 L15,40" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div className="flex flex-col items-center gap-1">
            {/* Main label */}
            <div className="px-4 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-[#550020]/10 via-[#550030]/5 to-[#550020]/10 border-y border-[#550020]/30">
              <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[#888]">
                CYBER<span className="text-[#aa0035]">HUNT</span>
              </span>
            </div>

            {/* Stats bar */}
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono opacity-60">
              <span className="text-[#660025]">PWR:<span className="text-[#666]">100%</span></span>
              <span className="text-[#444]">|</span>
              <span className="text-[#660035]">ACC:<span className="text-[#666]">MAX</span></span>
              <span className="text-[#444]">|</span>
              <span className="text-[#550055]">RNG:<span className="text-[#666]">∞</span></span>
            </div>
          </div>

          {/* Right bracket */}
          <svg width="20" height="40" viewBox="0 0 20 40" className="text-[#550020]/70 hidden sm:block">
            <path d="M5,0 L15,0 L15,40 L5,40" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Corner accents - very subtle */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-[#660025]/50 hidden sm:block" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-[#660025]/50 hidden sm:block" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-[#660040]/40 hidden sm:block" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-[#660040]/40 hidden sm:block" />
      </div>
    </div>
  );
}

function CyberCard({
  href,
  icon,
  title,
  description,
  delay = 0,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Link
      href={href}
      className="group relative p-4 sm:p-6 rounded-lg cyber-border-animated card-hover overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/5 to-[var(--neon-pink)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--neon-blue)]/10 flex items-center justify-center text-[var(--neon-blue)] mb-3 sm:mb-4 group-hover:bg-[var(--neon-blue)] group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_30px_var(--neon-blue)]">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--muted)] group-hover:text-[var(--foreground)]/70 transition-colors">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}

function StatBox({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <div
      className="text-center relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative inline-block">
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold cyber-text mb-1 sm:mb-2 glow-text">
          {value}
        </div>
        <div className="absolute -inset-4 bg-[var(--neon-blue)]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="text-[10px] sm:text-sm text-[var(--muted)] uppercase tracking-wider sm:tracking-widest font-mono">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center pt-16 relative overflow-hidden scanlines cyber-grid">
        <MatrixRain />

        {/* Animated background elements */}
        <CyberBackground />

        {/* Floating particles */}
        <FloatingParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
          {/* Main title - CyberHunt Logo */}
          <h1 className="mb-8">
            <CyberHuntLogo />
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-2xl md:text-3xl text-[var(--foreground)] max-w-3xl mx-auto mb-4 font-light px-2">
            <span className="text-[var(--neon-blue)] glow-text">{t("home.tagline1")}</span> {t("home.tagline2")}{" "}
            <span className="text-[var(--neon-pink)] glow-text-pink">{t("home.tagline3")}</span> {t("home.tagline4")}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
            {t("home.description")} <span className="text-[var(--neon-blue)]">{t("home.description2")}</span> {t("home.description3")}{" "}
            <span className="text-[var(--neon-pink)]">{t("home.description4")}</span>{t("home.description5")}{" "}
            <span className="font-mono text-[var(--neon-purple)]">{t("home.description6")}</span>{t("home.description7")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="/works"
              className="cyber-button inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg bg-[var(--neon-blue)] text-black hover:bg-[var(--neon-blue)]/90 transition-all hover:scale-105 glow w-full sm:w-auto"
            >
              <span className="mr-2">{">"}</span>
              {t("home.viewWork")}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg cyber-border text-[var(--foreground)] hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)] transition-all w-full sm:w-auto"
            >
              <span className="mr-2">[</span>
              {t("home.getInTouch")}
              <span className="ml-2">]</span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-[var(--muted)]">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest">{t("home.scroll")}</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[var(--neon-blue)]/50 flex items-start justify-center p-1.5 sm:p-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--neon-blue)] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-[var(--card)] border-y border-[var(--border)] relative overflow-hidden hex-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-pink)]/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <StatBox value="3" label={t("home.projects")} delay={0} />
            <StatBox value="5" label={t("home.hackers")} delay={100} />
            <StatBox value="3+" label={t("home.years")} delay={200} />
            <StatBox value="20+" label={t("home.technologies")} delay={300} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 relative cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--neon-blue)]">{"<"}</span>
              {t("home.whatWeBuild")}
              <span className="text-[var(--neon-pink)]">{" />"}</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mx-auto font-mono px-4">
              {t("home.whatWeBuildDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <CyberCard
              href="/services/web"
              delay={0}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title={t("home.webDev")}
              description={t("home.webDevDesc")}
            />
            <CyberCard
              href="/services/games"
              delay={100}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title={t("home.gameDev")}
              description={t("home.gameDevDesc")}
            />
            <CyberCard
              href="/services/mobile"
              delay={200}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title={t("home.mobileApps")}
              description={t("home.mobileAppsDesc")}
            />
            <CyberCard
              href="/services/design"
              delay={300}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              title={t("home.uiuxDesign")}
              description={t("home.uiuxDesignDesc")}
            />
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-pink)] to-[var(--neon-purple)] p-[2px] rounded-xl sm:rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-xl sm:rounded-2xl" />
            </div>

            {/* Content */}
            <div className="relative p-6 sm:p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-pink)]/10" />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-[var(--neon-blue)] glow-text">{t("home.readyToBuild")}</span>{" "}
                  <span className="text-[var(--neon-purple)] glow-text-purple">{t("home.toBuildSomething")}</span>{" "}
                  <span className="text-[var(--neon-blue)] glow-text">{t("home.amazing")}</span>?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                  {t("home.ctaDescription")}
                </p>
                <Link
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-pink)] text-black hover:opacity-90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-blue), 0 0 60px var(--neon-pink)" }}
                >
                  <span className="mr-2">{">>>"}</span>
                  {t("home.startProject")}
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
