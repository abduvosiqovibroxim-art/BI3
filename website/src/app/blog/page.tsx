"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: "tech" | "tutorial" | "news" | "devlog";
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: 1,
    slug: "building-cyberpunk-ui-with-css",
    title: "Building Cyberpunk UI Effects with Pure CSS",
    excerpt: "Learn how to create stunning neon glows, glitch effects, and futuristic interfaces using only CSS. No JavaScript required for these eye-catching animations.",
    category: "tutorial",
    author: { name: "Alex", avatar: "A" },
    date: "2024-11-25",
    readTime: "8 min",
    tags: ["CSS", "UI/UX", "Animation"],
    featured: true,
  },
  {
    id: 2,
    slug: "our-game-dev-journey",
    title: "Our Game Development Journey: From Zero to Published",
    excerpt: "The story of how four young developers created their first commercial game. Challenges, learnings, and tips for aspiring game devs.",
    category: "devlog",
    author: { name: "Mike", avatar: "M" },
    date: "2024-11-20",
    readTime: "12 min",
    tags: ["Game Dev", "Unity", "Indie"],
    featured: true,
  },
  {
    id: 3,
    slug: "nextjs-15-whats-new",
    title: "Next.js 15: What's New and How We're Using It",
    excerpt: "Exploring the latest features in Next.js 15 including Turbopack, improved caching, and our experience migrating our projects.",
    category: "tech",
    author: { name: "Sam", avatar: "S" },
    date: "2024-11-18",
    readTime: "6 min",
    tags: ["Next.js", "React", "Web Dev"],
  },
  {
    id: 4,
    slug: "mastering-threejs-basics",
    title: "Mastering Three.js: A Beginner's Guide to 3D Web",
    excerpt: "Step-by-step guide to creating your first 3D scene with Three.js. From setup to animation, everything you need to get started.",
    category: "tutorial",
    author: { name: "Alex", avatar: "A" },
    date: "2024-11-15",
    readTime: "15 min",
    tags: ["Three.js", "WebGL", "3D"],
  },
  {
    id: 5,
    slug: "bi3-joins-natex-labs",
    title: "BI3 Joins Natex Labs Partnership Program",
    excerpt: "Exciting news! We're officially partnering with Natex Labs to bring more innovative projects to Uzbekistan's tech ecosystem.",
    category: "news",
    author: { name: "Team BI3", avatar: "B" },
    date: "2024-11-10",
    readTime: "3 min",
    tags: ["News", "Partnership", "BI3"],
  },
  {
    id: 6,
    slug: "optimizing-react-performance",
    title: "10 Tips for Optimizing React Performance",
    excerpt: "Practical techniques to make your React apps faster. From memo to lazy loading, learn what actually makes a difference.",
    category: "tech",
    author: { name: "Sam", avatar: "S" },
    date: "2024-11-05",
    readTime: "10 min",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 7,
    slug: "creating-pixel-art-games",
    title: "Creating Pixel Art for Your Indie Game",
    excerpt: "A designer's guide to creating charming pixel art. Tools, techniques, and common mistakes to avoid.",
    category: "tutorial",
    author: { name: "Mike", avatar: "M" },
    date: "2024-11-01",
    readTime: "9 min",
    tags: ["Pixel Art", "Design", "Game Dev"],
  },
  {
    id: 8,
    slug: "neon-racer-devlog-1",
    title: "Neon Racer Dev Log #1: Concept to Prototype",
    excerpt: "First development log for our upcoming game Neon Racer. See how we went from concept art to playable prototype in 2 weeks.",
    category: "devlog",
    author: { name: "Mike", avatar: "M" },
    date: "2024-10-28",
    readTime: "7 min",
    tags: ["Neon Racer", "Game Dev", "Devlog"],
  },
];

const categoryConfig = {
  tech: {
    label: "Tech",
    color: "var(--neon-blue)",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  tutorial: {
    label: "Tutorial",
    color: "var(--neon-green)",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  news: {
    label: "News",
    color: "var(--neon-pink)",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  devlog: {
    label: "Dev Log",
    color: "var(--neon-purple)",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
};

function FeaturedPost({ post }: { post: BlogPost }) {
  const config = categoryConfig[post.category];

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image placeholder */}
          <div
            className="relative h-64 md:h-full min-h-[300px]"
            style={{ background: `linear-gradient(135deg, ${config.color}20 0%, var(--card) 100%)` }}
          >
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl opacity-10" style={{ color: config.color }}>
                {post.title.charAt(0)}
              </span>
            </div>
            {/* Featured badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono bg-[var(--neon-pink)] text-black">
              ★ Featured
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            {/* Category */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono w-fit mb-4"
              style={{ background: `${config.color}20`, color: config.color }}
            >
              {config.icon}
              {config.label}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--neon-blue)] transition-colors">
              {post.title}
            </h2>

            <p className="text-[var(--muted)] mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--muted)]">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${config.color}30`, color: config.color }}
                >
                  {post.author.avatar}
                </div>
                <span className="text-[var(--muted)]">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-4 text-[var(--muted)] font-mono text-xs">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const config = categoryConfig[post.category];

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300 card-hover">
        {/* Image placeholder */}
        <div
          className="relative h-48"
          style={{ background: `linear-gradient(135deg, ${config.color}15 0%, var(--card) 100%)` }}
        >
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-10" style={{ color: config.color }}>
              {post.title.charAt(0)}
            </span>
          </div>

          {/* Category badge */}
          <div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: `${config.color}20`, color: config.color }}
          >
            {config.icon}
            {config.label}
          </div>

          {/* Read time */}
          <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono bg-black/50 text-white/70">
            {post.readTime}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-[var(--border)] text-[var(--muted)]">
                #{tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: `${config.color}30`, color: config.color }}
              >
                {post.author.avatar}
              </div>
              <span>{post.author.name}</span>
            </div>
            <span className="font-mono">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | BlogPost["category"]>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = posts.filter((p) => p.featured);
  const filteredPosts = posts.filter((p) => {
    const matchesCategory = filter === "all" || p.category === filter;
    const matchesSearch = searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch && !p.featured;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-green)]/5 via-transparent to-[var(--neon-purple)]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Terminal badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
              <span className="text-sm font-mono text-[var(--neon-green)]">
                ~/content/blog
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[var(--neon-green)]">{"/*"}</span>
              {" "}{t("blog.title")}{" "}
              <span className="text-[var(--neon-purple)]">{"*/"}</span>
            </h1>

            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              <span className="text-[var(--neon-green)]">{t("blog.tutorials")}</span>,{" "}
              <span className="text-[var(--neon-blue)]">{t("blog.techInsights")}</span>,{" "}
              <span className="text-[var(--neon-purple)]">{t("blog.devLogs")}</span>, {t("blog.news")}{" "}
              <span className="text-[var(--neon-pink)]">{t("blog.subtitle")}</span>
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t("blog.searchPosts")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-blue)] font-mono text-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === "all"
                  ? "bg-white text-black"
                  : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-white"
              }`}
            >
              {t("blog.allPosts")}
            </button>
            {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  filter === key
                    ? "text-black"
                    : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-white"
                }`}
                style={filter === key ? { background: categoryConfig[key].color } : {}}
              >
                {categoryConfig[key].icon}
                {categoryConfig[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {filter === "all" && searchQuery === "" && featuredPosts.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[var(--neon-pink)]/20 flex items-center justify-center">
                <span className="text-[var(--neon-pink)]">★</span>
              </div>
              <h2 className="text-xl font-bold">{t("blog.featuredPosts")}</h2>
            </div>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {(filter !== "all" || searchQuery !== "") && (
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {filter !== "all" ? categoryConfig[filter].label : "Search Results"}
                <span className="text-[var(--muted)] font-normal ml-2">
                  ({filteredPosts.length + (filter === "all" && searchQuery === "" ? 0 : featuredPosts.filter(p => filter === "all" || p.category === filter).length)} posts)
                </span>
              </h2>
            </div>
          )}

          {filter === "all" && searchQuery === "" && (
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[var(--neon-blue)]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">{t("blog.latestPosts")}</h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-[var(--muted)] font-mono">{t("blog.noPosts")}</p>
              <button
                onClick={() => { setFilter("all"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 rounded-lg text-sm font-mono text-[var(--neon-blue)] hover:underline"
              >
                {t("blog.clearFilters")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--neon-purple)]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[var(--neon-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("blog.stayUpdated")} <span className="text-[var(--neon-purple)]">{t("blog.updated")}</span>
          </h2>
          <p className="text-[var(--muted)] mb-8">
            {t("blog.newsletterDesc")}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("blog.emailPlaceholder")}
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--neon-purple)] font-mono text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[var(--neon-purple)] text-black font-mono text-sm hover:opacity-90 transition-opacity"
            >
              {t("blog.subscribe")}
            </button>
          </form>
          <p className="text-xs text-[var(--muted)] mt-4 font-mono">
            {t("blog.noSpam")}
          </p>
        </div>
      </section>
    </div>
  );
}
