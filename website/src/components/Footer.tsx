"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bi3",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/bi3",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/bi3team",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      { name: t("home.webDev"), href: "/services#web" },
      { name: t("home.gameDev"), href: "/services#games" },
      { name: t("home.mobileApps"), href: "/services#mobile" },
      { name: t("home.uiuxDesign"), href: "/services#design" },
    ],
    company: [
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.works"), href: "/works" },
      { name: t("nav.blog"), href: "/blog" },
      { name: t("nav.contact"), href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">BI3</span>
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[var(--muted)] max-w-xs">
              {t("footer.description")}
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs text-[var(--muted)]">{t("footer.partOf")}</span>
              <a
                href="https://natex.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                Natex Labs
              </a>
              <span className="text-[10px] sm:text-xs text-[var(--muted)]">&</span>
              <a
                href="https://1it.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                FirstIt
              </a>
            </div>
            {/* Social Links */}
            <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">{t("footer.services")}</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">{t("footer.navigation")}</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">{t("footer.connect")}</h3>
            <div className="mt-3 sm:mt-4">
              <p className="text-[10px] sm:text-xs text-[var(--muted)]">
                {t("about.tashkent")}
                <br />
                UTC+5
              </p>
              <a
                href="mailto:hello@bi3.dev"
                className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm text-[var(--neon-blue)] hover:underline"
              >
                hello@bi3.dev
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--border)]">
          <p className="text-[10px] sm:text-xs text-[var(--muted)] text-center">
            &copy; {new Date().getFullYear()} BI3. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
