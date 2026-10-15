import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TARAX AI — Autonomous Global B2B Trade",
  description: "Autonomous Global B2B Trade & Multi-Agent Negotiation Engine",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0B0E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0B0E]">{children}</body>
    </html>
  );
}
