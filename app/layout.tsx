import type { Metadata } from "next";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AmbientBackground from "@/components/effects/AmbientBackground";

export const metadata: Metadata = {
  title: "Fatima Abu Bakar — Frontend Developer",
  description:
    "Fatima Abu Bakar is a Frontend Developer and Software Engineering graduate based in Lahore, Pakistan, building polished, accessible, and performant web interfaces with React, Next.js, and modern frontend architecture.",
  keywords: [
    "Fatima Abu Bakar",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Software Engineer",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Fatima Abu Bakar" }],
  openGraph: {
    title: "Fatima Abu Bakar — Frontend Developer",
    description:
      "Building thoughtful interfaces where polished frontend experiences meet solid engineering.",
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
      <body className="antialiased relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-plum focus:px-5 focus:py-2.5 focus:text-ivory focus:text-sm"
        >
          Skip to content
        </a>
        <AmbientBackground />
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
