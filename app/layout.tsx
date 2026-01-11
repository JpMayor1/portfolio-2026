import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Phillip Mayor | Portfolio",
  description:
    "Portfolio of James Phillip Mayor – Full-Stack Developer, DevOps, and AI Automation specialist.",

  icons: {
    icon: "/JPM-logo.png",
    shortcut: "/JPM-logo.png",
    apple: "/JPM-logo.png",
  },

  keywords: [
    "James Phillip Mayor",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "AI Automation",
    "Next.js Developer",
  ],

  authors: [
    {
      name: "James Phillip Mayor",
      url: "https://jamesphillipmayor.com",
    },
  ],

  creator: "James Phillip Mayor",
  publisher: "James Phillip Mayor",

  metadataBase: new URL("https://jamesphillipmayor.com"),

  openGraph: {
    title: "James Phillip Mayor | Portfolio",
    description: "Full-Stack Developer, DevOps, and AI Automation specialist.",
    url: "https://jamesphillipmayor.com",
    siteName: "James Phillip Mayor Portfolio",
    images: [
      {
        url: "/JPM-logo.png",
        width: 1200,
        height: 630,
        alt: "James Phillip Mayor Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "James Phillip Mayor | Portfolio",
    description: "Full-Stack Developer, DevOps, and AI Automation specialist.",
    images: ["/JPM-logo.png"],
    creator: "@your_twitter_handle", // optional
  },

  alternates: {
    canonical: "https://jamesphillipmayor.com",
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
