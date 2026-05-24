"use client";
import { useState } from "react";

const semuaTopik = [
  { nama: "Matematika Dasar", level: "SD", link: "/tanya?q=Jelaskan+materi+Matematika+Dasar" },
  { nama: "IPA", level: "SD", link: "/tanya?q=Jelaskan+materi+IPA" },
  { nama: "Bahasa Indonesia", level: "SD", link: "/tanya?q=Jelaskan+materi+Bahasa+Indonesia" },
  { nama: "IPS", level: "SD", link: "/tanya?q=Jelaskan+materi+IPS" },
  { nama: "Aljabar", level: "SMP", link: "/tanya?q=Jelaskan+materi+Aljabar" },
  { nama: "Fisika", level: "SMP", link: "/tanya?q=Jelaskan+materi+Fisika" },
  { nama: "Kimia", level: "SMP", link: "/tanya?q=Jelaskan+materi+Kimia" },
  { nama: "Biologi", level: "SMP", link: "/tanya?q=Jelaskan+materi+Biologi" },
  { nama: "Sejarah", level: "SMP", link: "/tanya?q=Jelaskan+materi+Sejarah" },
  { nama: "Kalkulus", level: "SMA", link: "/tanya?q=Jelaskan+materi+Kalkulus" },
  { nama: "Fisika Lanjut", level: "SMA", link: "/tanya?q=Jelaskan+materi+Fisika+Lanjut" },
  { nama: "Kimia Organik", level: "SMA", link: "/tanya?q=Jelaskan+materi+Kimia+Organik" },
  { nama: "Ekonomi", level: "SMA", link: "/tanya?q=Jelaskan+materi+Ekonomi" },
  { nama: "Pemrograman", level: "Kuliah", link: "/tanya?q=Jelaskan+materi+Pemrograman" },
  { nama: "Psikologi", level: "Kuliah", link: "/tanya?q=Jelaskan+materi+Psikologi" },
  { nama: "Hukum", level: "Kuliah", link: "/tanya?q=Jelaskan+materi+Hukum" },
];

export default function Cari() {
  const [kata, setKata] = useState("");
  const hasil = semuaTopik.filter(t => t.nama.toLowerCase().includes(kata.toLowerCase()));

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="text-xl font-bold text-yellow-400">EduSite</a>
        <div className="flex gap-4 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
          <a href="/kuis" className="hover:text-yellow-400">Kuis</a>
          <a href="/cari" className="text-yellow-400 font-bold">Cari</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Cari <span className="text-yellow-400">Materi</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Ketik topik yang ingin kamu pelajari
        </p>

        <input
          type="text"
          className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm border border-slate-700 focus:outline-none focus:border-yellow-400 mb-8"
          placeholder="Cari topik... contoh: Fisika, Kimia, Sejarah..."
          value={kata}
          onChange={(e) => setKata(e.target.value)}
        />

        {kata && (
          <div>
            <p className="text-slate-400 text-sm mb-4">Ditemukan {hasil.length} topik</p>
            {hasil.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-slate-400 mb-4">Topik tidak ditemukan di daftar</p>
                <a href={"/tanya?q=Jelaskan+materi+" + encodeURIComponent(kata)} className="bg-yellow-400 text-slate-950 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-sm">
                  Tanya AI tentang "{kata}"
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {hasil.map((t) => (
                  <a key={t.nama} href={t.link} className="bg-slate-900 rounded-xl p-4 border border-slate-800 hover:border-yellow-400 transition flex justify-between items-center">
                    <span className="font-medium">{t.nama}</span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-400">{t.level}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        2026 EduSite - Platform Pendidikan untuk Semua
      </footer>
    </main>
  )
}