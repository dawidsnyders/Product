import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PRIME on Kamino — Institutional-Grade HELOC Yield, Amplified On-Chain",
  description:
    "PRIME is a yield-bearing token backed by short-term US HELOC warehouse lending. ~8% APY from real homeowner interest payments, amplified to 11-21% via Kamino Multiply.",
  openGraph: {
    title: "PRIME on Kamino",
    description: "Institutional-Grade HELOC Yield, Amplified On-Chain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
