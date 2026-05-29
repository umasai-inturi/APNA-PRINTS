import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APNA PRINTS | Premium Printing Services",
  description: "We bring your ideas to life with high-quality prints.",
};

import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(SITE_SETTINGS_QUERY);

  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full antialiased smooth-scroll`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar settings={settings} />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
