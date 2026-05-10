import type { Metadata } from "next";
import { Sora, Ms_Madi } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ms_madi = Ms_Madi({
  variable: "--font-ms-madi",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Daivat Vadera | Full Stack Web Developer",
  description: "Daivat Vadera is a Full Stack Web Developer specializing in React, Next.js, and Node.js. Expert in building performant, accessible, and scalable web applications.",
  keywords: ["Daivat Vadera", "Full Stack Developer", "Web Developer", "React Developer", "Next.js Developer", "Software Engineer"],
  authors: [{ name: "Daivat Vadera" }],
  creator: "Daivat Vadera",
  publisher: "Daivat Vadera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.daivatvadera.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daivat Vadera | Full Stack Web Developer",
    description: "Official portfolio of Daivat Vadera, a Full Stack Web Developer turning ideas into production-ready web apps.",
    url: "https://www.daivatvadera.com",
    siteName: "Daivat Vadera Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daivat Vadera | Full Stack Web Developer",
    description: "Official portfolio of Daivat Vadera, a Full Stack Web Developer turning ideas into production-ready web apps.",
    creator: "@daivat_vadera",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Daivat Vadera",
  "url": "https://www.daivatvadera.com",
  "jobTitle": "Full Stack Web Developer",
  "sameAs": [
    "https://github.com/Daivat-Vadera",
    "https://www.linkedin.com/in/daivat-vadera-090647117",
    "https://www.instagram.com/daivat_vadera"
  ],
  "description": "Daivat Vadera is a Full Stack Web Developer specializing in React, Next.js, and Node.js."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://kit.fontawesome.com/8a4ea76776.js"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sora.variable} ${ms_madi.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
