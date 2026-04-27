import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { WhatsAppButton } from "./components/utils/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JA Persisol",
  description: "Persianas e cortinas sob medida em Curitiba!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
      </body>
    </html>
  );
}
