"use client";
import { useState } from "react";

export default function Rangkum() {
  const [teks, setTeks] = useState("");
  const [hasil, setHasil] = useState("");
  const [loading, setLoading] = useState(false);

  async function rangkum() {
    if (!teks) return;
    setLoading(true);
    setHasil("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: `Rangkum teks berikut dengan singkat, jelas, dan mudah dipahami. Gunakan poin-poin penting:\n\n${teks}` }),
    });
    const data = await res.json();
    setHasil(data.jawaban);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rangkum <span className="text-yellow-400">AI</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Paste teks panjang dan AI akan merangkumnya menjadi poin-poin penting!
        </p>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-4">
          <textarea
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400"
            rows={8}
            placeholder="Paste teks panjang di sini — artikel, materi pelajaran, buku, dll..."
            value={teks}
            onChange={(e) => setTeks(e.target.value)}
          />
          <div className="flex justify-between items-center mt-2 mb-4">
            <span className="text-xs text-slate-500">{teks.length} karakter</span>
            <button onClick={() => setTeks("")} className="text-xs text-slate-500 hover:text-red-400">Hapus</button>
          </div>
          <button
            onClick={rangkum}
            disabled={loading || teks.length === 0}
            className="w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang merangkum..." : "Rangkum Sekarang"}
          </button>
        </div>

        {hasil && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Hasil Rangkuman:</h2>
              <div className="flex gap-2">
                <button onClick={() => navigator.clipboard.writeText(hasil)} className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition">Copy</button>
                <button onClick={() => window.open("https://wa.me/?text=" + encodeURIComponent(hasil))} className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full transition">Bagikan WA</button>
              </div>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{hasil}</p>
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        2026 EduSite - Platform Pendidikan untuk Semua
      </footer>
    </main>
  )
}