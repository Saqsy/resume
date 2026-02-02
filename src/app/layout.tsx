import type { Metadata } from "next";
import "./globals.css";
import AntigravityBackground from "@/components/AntigravityBackground";
import SplashCursor from "@/components/SplashCursor";

export const metadata: Metadata = {
  title: "Saquib Kazi | Software Engineer",
  description: "Software Engineer with 2.5+ years experience. Skilled in Java, Spring Boot, Selenium, Appium, and API automation. Open for remote opportunities.",
  keywords: "Saquib Kazi, Software Engineer, Java Developer, Spring Boot, Selenium, Appium, Rest Assured, QA Automation, London, UK",
  authors: [{ name: "Saquib Kazi" }],
  openGraph: {
    title: "Saquib Kazi | Software Engineer",
    description: "Software Engineer with 2.5+ years experience. Open for remote opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <AntigravityBackground />
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
