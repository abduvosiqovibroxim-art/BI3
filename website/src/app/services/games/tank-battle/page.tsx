"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type GameCategory = "all" | "action" | "racing" | "puzzle" | "strategy" | "arcade";

interface Game {
  id: string;
  titleKey: string;
  descKey: string;
  category: GameCategory;
  image: string;
  gradient: string;
  icon: string;
  href: string;
  status: "playable" | "coming_soon" | "in_development";
  players?: string;
  rating?: number;
}

const games: Game[] = [
  {
    id: "tank-battle",
    titleKey: "games.tankBattle.title",
    descKey: "games.tankBattle.desc",
    category: "action",
    image: "/optimized/logo.webp",
    gradient: "from-emerald-500 to-cyan-500",
    icon: "🎮",
    href: "/services/games/play",
    status: "playable",
    players: "1-10",
    rating: 4.8,
  },
  {
    id: "cyber-racer",
    titleKey: "games.cyberRacer.title",
    descKey: "games.cyberRacer.desc",
    category: "racing",
    image: "",
    gradient: "from-purple-500 to-pink-500",
    icon: "🏎️",
    href: "#",
    status: "in_development",
  },
  {
    id: "neon-blocks",
    titleKey: "games.neonBlocks.title",
    descKey: "games.neonBlocks.desc",
    category: "puzzle",
    image: "",
    gradient: "from-blue-500 to-indigo-500",
    icon: "🧩",
    href: "#",
    status: "coming_soon",
  },
  {
    id: "space-defense",
    titleKey: "games.spaceDefense.title",
    descKey: "games.spaceDefense.desc",
    category: "strategy",
    image: "",
    gradient: "from-orange-500 to-red-500",
    icon: "🚀",
    href: "#",
    status: "coming_soon",
  },
  {
    id: "pixel-jump",
    titleKey: "games.pixelJump.title",
    descKey: "games.pixelJump.desc",
    category: "arcade",
    image: "",
    gradient: "from-green-500 to-teal-500",
    icon: "👾",
    href: "#",
    status: "coming_soon",
  },
  {
    id: "cyber-chess",
    titleKey: "games.cyberChess.title",
    descKey: "games.cyberChess.desc",
    category: "strategy",
    image: "",
    gradient: "from-amber-500 to-orange-500",
    icon: "♟️",
    href: "#",
    status: "coming_soon",
  },
  {
    id: "neon-drift",
    titleKey: "games.neonDrift.title",
    descKey: "games.neonDrift.desc",
    category: "racing",
    image: "",
    gradient: "from-cyan-500 to-blue-500",
    icon: "🏁",
    href: "#",
    status: "coming_soon",
  },
  {
    id: "battle-cards",
    titleKey: "games.battleCards.title",
    descKey: "games.battleCards.desc",
    category: "strategy",
    image: "",
    gradient: "from-rose-500 to-pink-500",
    icon: "🃏",
    href: "#",
    status: "coming_soon",
  },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    "games.title": "BI3 Games",
    "games.subtitle": "Play our games directly in browser",
    "games.all": "All Games",
    "games.action": "Action",
    "games.racing": "Racing",
    "games.puzzle": "Puzzle",
    "games.strategy": "Strategy",
    "games.arcade": "Arcade",
    "games.play": "Play Now",
    "games.coming_soon": "Coming Soon",
    "games.in_development": "In Development",
    "games.players": "Players",
    "games.featured": "Featured",
    "games.new": "New",
    "games.tankBattle.title": "Tank Battle",
    "games.tankBattle.desc": "Epic tank battles with upgrades and customization",
    "games.cyberRacer.title": "Cyber Racer",
    "games.cyberRacer.desc": "High-speed racing in neon city",
    "games.neonBlocks.title": "Neon Blocks",
    "games.neonBlocks.desc": "Classic puzzle with cyber twist",
    "games.spaceDefense.title": "Space Defense",
    "games.spaceDefense.desc": "Defend your base from alien invasion",
    "games.pixelJump.title": "Pixel Jump",
    "games.pixelJump.desc": "Retro platformer adventure",
    "games.cyberChess.title": "Cyber Chess",
    "games.cyberChess.desc": "Strategic chess with futuristic pieces",
    "games.neonDrift.title": "Neon Drift",
    "games.neonDrift.desc": "Drift through neon-lit streets",
    "games.battleCards.title": "Battle Cards",
    "games.battleCards.desc": "Collect and battle with cyber cards",
  },
  ru: {
    "games.title": "BI3 Игры",
    "games.subtitle": "Играйте в наши игры прямо в браузере",
    "games.all": "Все игры",
    "games.action": "Экшен",
    "games.racing": "Гонки",
    "games.puzzle": "Головоломки",
    "games.strategy": "Стратегии",
    "games.arcade": "Аркады",
    "games.play": "Играть",
    "games.coming_soon": "Скоро",
    "games.in_development": "В разработке",
    "games.players": "Игроки",
    "games.featured": "Рекомендуем",
    "games.new": "Новое",
    "games.tankBattle.title": "Танковый Бой",
    "games.tankBattle.desc": "Эпичные танковые сражения с апгрейдами",
    "games.cyberRacer.title": "Кибер Гонщик",
    "games.cyberRacer.desc": "Скоростные гонки в неоновом городе",
    "games.neonBlocks.title": "Неон Блоки",
    "games.neonBlocks.desc": "Классическая головоломка в кибер стиле",
    "games.spaceDefense.title": "Космическая Оборона",
    "games.spaceDefense.desc": "Защитите базу от инопланетного вторжения",
    "games.pixelJump.title": "Пиксель Прыг",
    "games.pixelJump.desc": "Ретро платформер приключение",
    "games.cyberChess.title": "Кибер Шахматы",
    "games.cyberChess.desc": "Стратегические шахматы с футуристичными фигурами",
    "games.neonDrift.title": "Неон Дрифт",
    "games.neonDrift.desc": "Дрифтуй по неоновым улицам",
    "games.battleCards.title": "Боевые Карты",
    "games.battleCards.desc": "Собирай и сражайся кибер картами",
  },
  uz: {
    "games.title": "BI3 O'yinlar",
    "games.subtitle": "O'yinlarimizni to'g'ridan-to'g'ri brauzerda o'ynang",
    "games.all": "Barcha o'yinlar",
    "games.action": "Jangovar",
    "games.racing": "Poyga",
    "games.puzzle": "Boshqotirma",
    "games.strategy": "Strategiya",
    "games.arcade": "Arkada",
    "games.play": "O'ynash",
    "games.coming_soon": "Tez kunda",
    "games.in_development": "Ishlab chiqilmoqda",
    "games.players": "O'yinchilar",
    "games.featured": "Tavsiya etilgan",
    "games.new": "Yangi",
    "games.tankBattle.title": "Tank Jangi",
    "games.tankBattle.desc": "Tank janglari yangilanishlar bilan",
    "games.cyberRacer.title": "Kiber Poygachi",
    "games.cyberRacer.desc": "Neon shaharda tezkor poyga",
    "games.neonBlocks.title": "Neon Bloklar",
    "games.neonBlocks.desc": "Klassik boshqotirma kiber uslubda",
    "games.spaceDefense.title": "Kosmik Mudofaa",
    "games.spaceDefense.desc": "Bazangizni begona bosqindan himoya qiling",
    "games.pixelJump.title": "Piksel Sakrash",
    "games.pixelJump.desc": "Retro platformer sarguzasht",
    "games.cyberChess.title": "Kiber Shaxmat",
    "games.cyberChess.desc": "Kelajak figuralari bilan strategik shaxmat",
    "games.neonDrift.title": "Neon Drift",
    "games.neonDrift.desc": "Neon ko'chalarida drift qiling",
    "games.battleCards.title": "Jangovar Kartalar",
    "games.battleCards.desc": "Kiber kartalarni yig'ing va jang qiling",
  },
};

export default function GamesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>("all");
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  const gt = (key: string) => {
    const lang = language as "en" | "ru" | "uz";
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  const categories: { key: GameCategory; label: string }[] = [
    { key: "all", label: gt("games.all") },
    { key: "action", label: gt("games.action") },
    { key: "racing", label: gt("games.racing") },
    { key: "puzzle", label: gt("games.puzzle") },
    { key: "strategy", label: gt("games.strategy") },
    { key: "arcade", label: gt("games.arcade") },
  ];

  const filteredGames = selectedCategory === "all"
    ? games
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-pink)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Terminal header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--neon-green)]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse shadow-[0_0_8px_var(--neon-green)]" />
            <code className="text-sm font-mono">
              <span className="text-[var(--neon-green)]">$</span>
              <span className="text-[var(--muted)]"> ./launch</span>
              <span className="text-[var(--neon-pink)]"> --games</span>
            </code>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-[var(--neon-green)] via-[var(--neon-blue)] to-[var(--neon-pink)] bg-clip-text text-transparent">
              {gt("games.title")}
            </span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto font-mono">
            {gt("games.subtitle")}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.key
                    ? "bg-[var(--neon-green)] text-black shadow-[0_0_20px_var(--neon-green)]"
                    : "bg-[var(--card)] text-[var(--muted)] hover:text-white border border-[var(--border)] hover:border-[var(--neon-green)]/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredGames.map((game, index) => (
              <Link
                key={game.id}
                href={game.status === "playable" ? game.href : "#"}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  game.status === "playable"
                    ? "hover:scale-105 hover:z-10 cursor-pointer"
                    : "cursor-not-allowed opacity-80"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                onClick={(e) => game.status !== "playable" && e.preventDefault()}
              >
                {/* Card background */}
                <div className={`aspect-[3/4] bg-gradient-to-br ${game.gradient} relative`}>
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 cyber-grid opacity-30" />

                  {/* Game icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">
                      {game.icon}
                    </span>
                  </div>

                  {/* Status badge */}
                  {game.status === "playable" && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[var(--neon-green)] text-black text-xs font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      {gt("games.featured")}
                    </div>
                  )}
                  {game.status === "coming_soon" && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[var(--neon-blue)]/80 text-white text-xs font-bold">
                      {gt("games.coming_soon")}
                    </div>
                  )}
                  {game.status === "in_development" && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[var(--neon-pink)]/80 text-white text-xs font-bold">
                      {gt("games.in_development")}
                    </div>
                  )}

                  {/* Rating */}
                  {game.rating && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      {game.rating}
                    </div>
                  )}

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {gt(game.titleKey)}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 line-clamp-2">
                      {gt(game.descKey)}
                    </p>

                    {/* Players info */}
                    {game.players && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-white/60">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {game.players} {gt("games.players")}
                      </div>
                    )}
                  </div>

                  {/* Hover play button */}
                  {game.status === "playable" && hoveredGame === game.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
                      <div className="px-6 py-3 rounded-full bg-[var(--neon-green)] text-black font-bold flex items-center gap-2 shadow-[0_0_30px_var(--neon-green)] animate-pulse">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        {gt("games.play")}
                      </div>
                    </div>
                  )}

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
                    style={{ boxShadow: `inset 0 0 50px ${game.gradient.includes("emerald") ? "var(--neon-green)" : game.gradient.includes("purple") ? "var(--neon-pink)" : "var(--neon-blue)"}` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--neon-purple)]/20 via-[var(--neon-pink)]/20 to-[var(--neon-blue)]/20 border border-[var(--border)] p-8 md:p-12">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-[var(--neon-pink)]">{"{"}</span>
                {" "}More Games Coming Soon{" "}
                <span className="text-[var(--neon-blue)]">{"}"}</span>
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto mb-6">
                We&apos;re working hard on new exciting games. Stay tuned for updates!
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[var(--neon-pink)] text-white font-medium hover:shadow-[0_0_30px_var(--neon-pink)] transition-all"
                >
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
