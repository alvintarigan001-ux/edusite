import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSite - Platform Pendidikan untuk Semua",
  description: "Belajar apa saja untuk semua usia dengan bantuan AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={geist.className + " min-h-screen bg-slate-950 text-white"}>
        <nav className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
          <a href="/" className="text-lg font-bold text-yellow-400">EduSite</a>
          <div className="flex gap-3 text-sm flex-wrap">
            <a href="/" className="hover:text-yellow-400">Beranda</a>
            <a href="/materi" className="hover:text-yellow-400">Materi</a>
            <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
            <a href="/kuis" className="hover:text-yellow-400">Kuis</a>
            <a href="/cari" className="hover:text-yellow-400">Cari</a>
            <a href="/terjemah" className="hover:text-yellow-400">Terjemah</a>
            <a href="/rangkum" className="hover:text-yellow-400">Rangkum</a>
            <a href="/faq" className="hover:text-yellow-400">FAQ</a>
            <a href="/tentang" className="hover:text-yellow-400">Tentang</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}