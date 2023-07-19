import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Topher Young - Developer. Designer. Music Nerd.",
  description:
    "Engineering and product leader with a passion for creating exceptional web-based applications and products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between max-w-6xl mx-auto my-6 py-12">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
