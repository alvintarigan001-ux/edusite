"use client";
import { useState } from "react";

export default function Kuis() {
  const [topik, setTopik] = useState("");
  const [kuis, setKuis] = useState("");
  const [loading, setLoading] = useState(false);

  async function buatKuis() {
    if (!topik) return;
    setLoading(true);
    setKuis("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: `Buatkan 5 soal kuis pilihan ganda tentang "${topik}" lengkap dengan jawaban dan penjelasannya. Format setiap soal dengan jelas dan mudah dipahami.` }),
    });
    const data = await res.json();
    setKuis(data.jawaban);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="text-xl font-bold text-yellow-400">EduSite</a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
          <a href="/kuis" className="text-yellow-400 font-bold">Kuis</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Kuis <span className="text-yellow-400">AI</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Masukkan topik apapun dan AI akan buatkan 5 soal kuis untukmu!
        </p>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <input
            type="text"
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm border border-slate-700 focus:outline-none focus:border-yellow-400"
            placeholder="Contoh: Fotosintesis, Perang Dunia 2, Matematika Dasar..."
            value={topik}
            onChange={(e) => setTopik(e.target.value)}
          />
          <button
            onClick={buatKuis}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang membuat soal..." : "Buat Kuis Sekarang"}
          </button>
        </div>

        {kuis && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Soal Kuis:</h2>
              <button
                onClick={() => navigator.clipboard.writeText(kuis)}
                className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition"
              >
                Copy Soal
              </button>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{kuis}</p>
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        2026 EduSite - Platform Pendidikan untuk Semua
      </footer>
    </main>
  )
}