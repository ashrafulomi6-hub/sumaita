import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav, ScrollProgress, Footer } from "@/components/Layout";
import { navLinks, siteSettings } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteSettings.siteTitle} — ${siteSettings.tagline}`,
  description: siteSettings.metaDescription,
  metadataBase: new URL(siteSettings.siteUrl),
  openGraph: {
    title: `${siteSettings.siteTitle} — ${siteSettings.tagline}`,
    description: siteSettings.metaDescription,
    url: siteSettings.siteUrl,
    siteName: siteSettings.siteTitle,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <Nav links={navLinks} siteName={siteSettings.siteTitle} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
