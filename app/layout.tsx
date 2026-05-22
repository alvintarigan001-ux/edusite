import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSite - Platform Pendidikan untuk Semua",
  description: "Belajar apa saja untuk semua usia dengan bantuan AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geist.className} min-h-screen`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}