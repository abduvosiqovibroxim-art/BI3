"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Interactive Phone Mockup Demo
function PhoneMockupDemo() {
  const { t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android">("ios");

  const screens = [
    {
      name: "Home",
      content: (
        <div className="h-full flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 py-2 text-[10px]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z"/>
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="px-4 py-3">
            <h2 className="text-lg font-bold">Good morning!</h2>
            <p className="text-[10px] text-gray-400">Welcome back, User</p>
          </div>

          {/* Cards */}
          <div className="flex-1 px-4 space-y-3 overflow-hidden">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <div className="text-[10px] opacity-80">Balance</div>
              <div className="text-xl font-bold">$12,450.00</div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {["Send", "Receive", "Pay", "More"].map((action, i) => (
                <button
                  key={action}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center gap-1"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-[10px]">
                    {["↑", "↓", "$", "•••"][i]}
                  </div>
                  <span className="text-[8px]">{action}</span>
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold mt-2">Recent Activity</div>
            {[
              { name: "Coffee Shop", amount: "-$4.50", icon: "☕" },
              { name: "Salary", amount: "+$3,200", icon: "💰" },
              { name: "Netflix", amount: "-$15.99", icon: "🎬" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-medium">{item.name}</div>
                  <div className="text-[8px] text-gray-400">Today</div>
                </div>
                <div className={`text-[10px] font-semibold ${item.amount.startsWith("+") ? "text-green-500" : ""}`}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around py-3 border-t border-gray-200 dark:border-gray-700">
            {["🏠", "📊", "💳", "👤"].map((icon, i) => (
              <button
                key={i}
                className={`p-2 ${i === 0 ? "text-blue-500" : "text-gray-400"}`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "Chat",
      content: (
        <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Team Chat</div>
              <div className="text-[10px] text-green-500">3 online</div>
            </div>
            <button className="text-gray-400">📞</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0" />
              <div className="bg-white dark:bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                <div className="text-[10px]">Hey! The new design looks great 🎨</div>
                <div className="text-[8px] text-gray-400 mt-1">10:30 AM</div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-2 max-w-[80%]">
                <div className="text-[10px]">Thanks! Working on the animations now</div>
                <div className="text-[8px] text-blue-200 mt-1">10:32 AM</div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0" />
              <div className="bg-white dark:bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                <div className="text-[10px]">Can't wait to see it! 🚀</div>
                <div className="text-[8px] text-gray-400 mt-1">10:33 AM</div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-[10px] text-gray-400">
                Type a message...
              </div>
              <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                ↑
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Profile",
      content: (
        <div className="h-full flex flex-col">
          {/* Header with profile */}
          <div className="bg-gradient-to-b from-purple-500 to-blue-500 pt-8 pb-12 px-4 text-white text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="mt-2 font-bold">John Doe</div>
            <div className="text-[10px] opacity-80">@johndoe</div>
          </div>

          {/* Stats */}
          <div className="flex justify-around -mt-4 mx-4 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            {[
              { label: "Posts", value: "142" },
              { label: "Followers", value: "12.5K" },
              { label: "Following", value: "891" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-sm font-bold">{stat.value}</div>
                <div className="text-[8px] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Menu items */}
          <div className="flex-1 px-4 py-4 space-y-2">
            {[
              { icon: "⚙️", label: "Settings" },
              { icon: "🔔", label: "Notifications" },
              { icon: "🔒", label: "Privacy" },
              { icon: "❓", label: "Help" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                <span className="ml-auto text-gray-400">›</span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentScreen((prev) => (prev + 1) % screens.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      nextScreen();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Platform toggle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 bg-[var(--card)] rounded-full p-1 border border-[var(--border)]">
        <button
          onClick={() => setPlatform("ios")}
          className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
            platform === "ios"
              ? "bg-[var(--neon-blue)] text-black"
              : "text-[var(--muted)] hover:text-white"
          }`}
        >
          iOS
        </button>
        <button
          onClick={() => setPlatform("android")}
          className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
            platform === "android"
              ? "bg-[var(--neon-green)] text-black"
              : "text-[var(--muted)] hover:text-white"
          }`}
        >
          Android
        </button>
      </div>

      {/* Phone frame */}
      <div
        className={`relative w-[220px] h-[440px] rounded-[40px] p-2 shadow-2xl transition-all duration-300 ${
          platform === "ios"
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-gray-900 to-black"
        }`}
        style={{
          boxShadow: platform === "ios"
            ? "0 0 40px rgba(0,240,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)"
            : "0 0 40px rgba(0,255,102,0.3), inset 0 0 20px rgba(255,255,255,0.1)"
        }}
      >
        {/* Notch / Camera */}
        {platform === "ios" ? (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
        ) : (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full z-10" />
        )}

        {/* Screen */}
        <div
          className={`w-full h-full rounded-[32px] overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${
            isAnimating ? "opacity-80" : "opacity-100"
          } transition-opacity`}
        >
          {screens[currentScreen].content}
        </div>

        {/* Home indicator (iOS) / Navigation buttons (Android) */}
        {platform === "ios" ? (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/50 rounded-full" />
        ) : (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
            <div className="w-3 h-3 border-2 border-white/30 rounded-sm" />
            <div className="w-3 h-3 border-2 border-white/30 rounded-full" />
            <div className="w-3 h-3 border-l-2 border-b-2 border-white/30 rotate-45" />
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevScreen}
        className="absolute left-0 p-2 text-[var(--muted)] hover:text-white transition-colors"
      >
        ‹
      </button>
      <button
        onClick={nextScreen}
        className="absolute right-0 p-2 text-[var(--muted)] hover:text-white transition-colors"
      >
        ›
      </button>

      {/* Screen indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {screens.map((screen, i) => (
          <button
            key={i}
            onClick={() => setCurrentScreen(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentScreen
                ? platform === "ios"
                  ? "bg-[var(--neon-blue)] w-4"
                  : "bg-[var(--neon-green)] w-4"
                : "bg-[var(--muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileDevelopmentPage() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "mobile.iosApps",
      descKey: "mobile.iosAppsDesc",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
    },
    {
      titleKey: "mobile.androidApps",
      descKey: "mobile.androidAppsDesc",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
        </svg>
      ),
    },
    {
      titleKey: "mobile.crossPlatform",
      descKey: "mobile.crossPlatformDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: "mobile.appDesign",
      descKey: "mobile.appDesignDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      titleKey: "mobile.backend",
      descKey: "mobile.backendDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      titleKey: "mobile.maintenance",
      descKey: "mobile.maintenanceDesc",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const features = [
    { titleKey: "mobile.offline", descKey: "mobile.offlineDesc", icon: "📴" },
    { titleKey: "mobile.push", descKey: "mobile.pushDesc", icon: "🔔" },
    { titleKey: "mobile.analytics", descKey: "mobile.analyticsDesc", icon: "📊" },
    { titleKey: "mobile.security", descKey: "mobile.securityDesc", icon: "🔐" },
    { titleKey: "mobile.performance", descKey: "mobile.performanceDesc", icon: "⚡" },
    { titleKey: "mobile.updates", descKey: "mobile.updatesDesc", icon: "🔄" },
  ];

  const techStack = {
    ios: ["Swift", "SwiftUI", "UIKit", "Core Data", "Combine"],
    android: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Hilt"],
    crossPlatformTech: ["React Native", "Flutter", "Expo", "Dart", "TypeScript"],
    backendTech: ["Firebase", "Node.js", "GraphQL", "AWS Amplify", "Supabase"],
  };

  const processSteps = [
    { titleKey: "mobile.ideation", descKey: "mobile.ideationDesc", icon: "💡" },
    { titleKey: "mobile.design", descKey: "mobile.designDesc", icon: "🎨" },
    { titleKey: "mobile.development", descKey: "mobile.developmentDesc", icon: "💻" },
    { titleKey: "mobile.launch", descKey: "mobile.launchDesc", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-green)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
            <span className="text-[var(--neon-blue)]">mobile</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 mb-6">
                <svg className="w-5 h-5 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-mono text-[var(--neon-blue)]">MOBILE_DEV.exe</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-[var(--neon-blue)]">{t("mobile.title")}</span>
                <br />
                <span className="text-white">{t("mobile.title2")}</span>
              </h1>

              <p className="text-xl text-[var(--foreground)]/70 mb-8 leading-relaxed">
                {t("services.mobileDevDesc")} {t("mobile.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-[var(--neon-blue)] text-black hover:bg-[var(--neon-blue)]/90 transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px var(--neon-blue)" }}
                >
                  <span className="mr-2">{">"}</span>
                  {t("mobile.startProject")}
                </Link>
                <Link
                  href="/works"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-[var(--neon-blue)]/50 text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10 transition-all"
                >
                  {t("mobile.viewApps")}
                </Link>
              </div>
            </div>

            {/* Interactive Phone Demo */}
            <div className="relative">
              <PhoneMockupDemo />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-[var(--muted)]">
                  {t("mobile.interactiveDemo")}
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
              <span className="text-[var(--neon-blue)]">{"<"}</span>
              <span className="text-white"> {t("mobile.whatWeCreate")} </span>
              <span className="text-[var(--neon-green)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("mobile.whatWeCreateDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 flex items-center justify-center text-[var(--neon-blue)] mb-4 group-hover:shadow-[0_0_20px_var(--neon-blue)] transition-shadow">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
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

      {/* App Features */}
      <section className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[var(--neon-green)]">{"["}</span>
              <span className="text-white"> {t("mobile.features")} </span>
              <span className="text-[var(--neon-blue)]">{"]"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono text-sm">
              {t("mobile.featuresDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all"
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
              <span className="text-[var(--neon-blue)]">{"{"}</span>
              <span className="text-white"> {t("mobile.techStack")} </span>
              <span className="text-[var(--neon-green)]">{"}"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("mobile.techStackDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="p-6 rounded-xl bg-[var(--card)]/50 border border-[var(--border)]">
                <h3 className="text-sm font-mono text-[var(--neon-blue)] mb-4 uppercase tracking-wider">
                  {t(`mobile.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded bg-[var(--neon-blue)]/10 text-[var(--neon-blue)] border border-[var(--neon-blue)]/20"
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
              <span className="text-[var(--neon-green)]">{"<"}</span>
              <span className="text-white"> {t("mobile.devProcess")} </span>
              <span className="text-[var(--neon-blue)]">{" />"}</span>
            </h2>
            <p className="text-[var(--muted)] font-mono">
              {t("mobile.devProcessDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-[var(--neon-blue)]/50 to-[var(--neon-green)]/50 z-0" />
                )}

                <div className="relative z-10 p-6 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-xs font-mono text-[var(--neon-blue)]/60 mb-2">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-green)] to-[var(--neon-blue)] p-[2px] rounded-2xl">
              <div className="absolute inset-[2px] bg-[var(--background)] rounded-2xl" />
            </div>

            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-white">{t("mobile.readyTo")} </span>
                  <span className="text-[var(--neon-blue)]">{t("mobile.goMobile")}</span>
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 text-lg">
                  {t("mobile.ctaDesc")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black hover:opacity-90 transition-all hover:scale-105"
                    style={{ boxShadow: "0 0 30px var(--neon-blue), 0 0 60px var(--neon-green)" }}
                  >
                    <span className="mr-2">{">>>"}</span>
                    {t("mobile.startProjectBtn")}
                    <span className="ml-2">{"<<<"}</span>
                  </Link>
                  <Link
                    href="/works"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-lg border border-[var(--neon-blue)]/50 text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10 transition-all"
                  >
                    {t("mobile.viewPortfolio")}
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
