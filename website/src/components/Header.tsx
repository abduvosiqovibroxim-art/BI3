"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.works"), href: "/works" },
    { name: t("nav.demos"), href: "/demos" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="BI3 Logo"
              width={100}
              height={33}
              className="h-7 sm:h-8 md:h-9 w-auto rounded"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Selector */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--muted)] hover:text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
