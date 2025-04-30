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
  title: "Colin Baillie",
  description: "Professional Resume of Colin Baillie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional resume of Colin Baillie, showcasing skills, experience, and education."
        />
        <meta name="author" content="Colin Baillie" />
        <meta
          name="keywords"
          content="Colin Baillie, resume, software engineer, web developer, professional portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Colin Baillie - Professional Resume"
        />
        <meta
          property="og:description"
          content="Explore the professional resume of Colin Baillie, including skills, experience, and education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.colinbaillie.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/preview-image.jpg"
        />
      </head>
      <body
        style={{ padding: "36px" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
