"use client";
import { useState } from "react";

export default function Kalkulator() {
  const [soal, setSoal] = useState("");
  const [hasil, setHasil] = useState("");
  const [loading, setLoading] = useState(false);

  async function hitung() {
    if (!soal) return;
    setLoading(true);
    setHasil("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: `Selesaikan soal matematika berikut dan jelaskan langkah-langkahnya dengan detail dan mudah dipahami:\n\n${soal}` }),
    });
    const data = await res.json();
    setHasil(data.jawaban);
    setLoading(false);
  }

  const contoh = ["2 + 2 × 5 = ?", "Luas lingkaran dengan jari-jari 7 cm", "25% dari 200", "Turunan dari x² + 3x + 2", "Integral dari 2x dx"];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Kalkulator <span className="text-yellow-400">AI</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Ketik soal matematika apapun dan AI akan menyelesaikan dengan penjelasan lengkap!
        </p>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-4">
          <label className="text-sm text-slate-400 mb-2 block">Contoh soal:</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {contoh.map((c) => (
              <button
                key={c}
                onClick={() => setSoal(c)}
                className="text-xs bg-slate-800 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1.5 rounded-full transition"
              >
                {c}
              </button>
            ))}
          </div>
          <textarea
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400"
            rows={4}
            placeholder="Ketik soal matematika... contoh: Berapa hasil dari 15 × 24 + 36 ÷ 4?"
            value={soal}
            onChange={(e) => setSoal(e.target.value)}
          />
          <button
            onClick={hitung}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang menghitung..." : "Hitung dan Jelaskan"}
          </button>
        </div>

        {hasil && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Penyelesaian:</h2>
              <button onClick={() => navigator.clipboard.writeText(hasil)} className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition">Copy</button>
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