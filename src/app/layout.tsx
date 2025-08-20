import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "We Gotcha Served LLC | Professional Process Servers",
  description:
    "Professional legal document delivery services. Fast, reliable, and legally compliant process serving for attorneys, law firms, and individuals.",
  icons: {
    icon: '/images/wgs-logo.png',
    apple: '/images/wgs-logo.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/images/wgs-logo.png" />
        <link rel="apple-touch-icon" href="/images/wgs-logo.png" />
        <link rel="preload" href="/images/wgs-logo.png" as="image" />
        <link rel="dns-prefetch" href="//formsubmit.co" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
