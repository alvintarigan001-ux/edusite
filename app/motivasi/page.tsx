"use client";
import { useState } from "react";

export default function Motivasi() {
  const [masalah, setMasalah] = useState("");
  const [hasil, setHasil] = useState("");
  const [loading, setLoading] = useState(false);

  async function dapatMotivasi() {
    setLoading(true);
    setHasil("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: masalah ? `Saya sedang menghadapi masalah belajar: "${masalah}". Berikan motivasi, solusi praktis, dan tips belajar efektif yang bisa saya lakukan sekarang.` : "Berikan motivasi belajar yang inspiratif dan tips belajar efektif untuk pelajar Indonesia. Sertakan quotes motivasi dan langkah konkret yang bisa dilakukan." }),
    });
    const data = await res.json();
    setHasil(data.jawaban);
    setLoading(false);
  }

  const topik = ["Sulit fokus belajar", "Malas mengerjakan PR", "Tidak paham pelajaran", "Takut ujian", "Tidak percaya diri", "Susah mengatur waktu"];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Motivasi <span className="text-yellow-400">Belajar</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Ceritakan masalah belajarmu dan AI akan memberikan motivasi dan solusi!
        </p>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-4">
          <label className="text-sm text-slate-400 mb-2 block">Pilih masalah yang sering kamu alami:</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {topik.map((t) => (
              <button key={t} onClick={() => setMasalah(t)} className={"px-3 py-1.5 rounded-full text-xs font-medium transition " + (masalah === t ? "bg-yellow-400 text-slate-950" : "bg-slate-800 hover:bg-slate-700")}>
                {t}
              </button>
            ))}
          </div>
          <textarea
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400"
            rows={3}
            placeholder="Atau ceritakan masalah belajarmu sendiri... (boleh kosong untuk motivasi umum)"
            value={masalah}
            onChange={(e) => setMasalah(e.target.value)}
          />
          <button
            onClick={dapatMotivasi}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang menyiapkan motivasi..." : "Dapatkan Motivasi"}
          </button>
        </div>

        {hasil && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Motivasi dari AI:</h2>
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