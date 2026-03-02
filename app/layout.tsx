import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Mushee — Funding Hub",
  description: "A YC-grade funding + public goods hub for Mushee. Premium black/red design.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-radial-red" />
          <div className="pointer-events-none absolute inset-0 opacity-[.45] [background-size:52px_52px] bg-grid" />
          <div className="noise absolute inset-0 opacity-60" />
          <div className="relative">
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-10">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
