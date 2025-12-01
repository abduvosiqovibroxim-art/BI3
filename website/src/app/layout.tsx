import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "BI3 - Web, Games & App Development Studio | Tashkent, Uzbekistan",
  description:
    "Young development studio creating exceptional websites, games, and mobile apps. Based in Tashkent, Uzbekistan. Part of Natex Labs.",
  keywords: [
    "BI3",
    "web development",
    "game development",
    "mobile apps",
    "Tashkent",
    "Uzbekistan",
    "Natex Labs",
    "FirstIt",
  ],
  authors: [{ name: "BI3 Team" }],
  openGraph: {
    title: "BI3 - Web, Games & App Development Studio",
    description:
      "Young development studio creating exceptional websites, games, and mobile apps. Based in Tashkent, Uzbekistan.",
    url: "https://bi3.dev",
    siteName: "BI3",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BI3 - Web, Games & App Development Studio",
    description:
      "Young development studio creating exceptional websites, games, and mobile apps. Based in Tashkent, Uzbekistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <CustomCursor />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
