"use client";
import { useState } from "react";

export default function Cerita() {
  const [topik, setTopik] = useState("");
  const [usia, setUsia] = useState("anak SD");
  const [cerita, setCerita] = useState("");
  const [loading, setLoading] = useState(false);

  async function buatCerita() {
    if (!topik) return;
    setLoading(true);
    setCerita("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: `Buatkan cerita pendek yang menarik dan mendidik tentang "${topik}" untuk ${usia}. Cerita harus mengandung pesan moral dan pelajaran yang mudah dipahami. Panjang cerita sekitar 3-4 paragraf.` }),
    });
    const data = await res.json();
    setCerita(data.jawaban);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Cerita <span className="text-yellow-400">Edukasi</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          AI akan buatkan cerita pendek yang menarik dan mendidik!
        </p>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-4">
          <label className="text-sm text-slate-400 mb-2 block">Untuk usia:</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {["anak SD", "anak SMP", "remaja SMA", "dewasa"].map((u) => (
              <button
                key={u}
                onClick={() => setUsia(u)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${usia === u ? "bg-yellow-400 text-slate-950" : "bg-slate-800 hover:bg-slate-700"}`}
              >
                {u}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm border border-slate-700 focus:outline-none focus:border-yellow-400"
            placeholder="Topik cerita... contoh: Kejujuran, Persahabatan, Lingkungan hidup..."
            value={topik}
            onChange={(e) => setTopik(e.target.value)}
          />
          <button
            onClick={buatCerita}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang menulis cerita..." : "Buat Cerita Sekarang"}
          </button>
        </div>

        {cerita && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Cerita AI:</h2>
              <div className="flex gap-2">
                <button onClick={() => navigator.clipboard.writeText(cerita)} className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition">Copy</button>
                <button onClick={() => window.open("https://wa.me/?text=" + encodeURIComponent(cerita))} className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full transition">Bagikan WA</button>
              </div>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{cerita}</p>
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        2026 EduSite - Platform Pendidikan untuk Semua
      </footer>
    </main>
  )
}