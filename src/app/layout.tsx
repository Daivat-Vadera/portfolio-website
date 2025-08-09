import type { Metadata } from "next";
import { Sora, Ms_Madi } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

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
  title: "Daivat Vadera",
  description: "Full Stack Developer  |  Daivat Vadera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/8a4ea76776.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${sora.variable} ${ms_madi.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
