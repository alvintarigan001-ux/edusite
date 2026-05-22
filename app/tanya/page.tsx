"use client";
import { useState } from "react";

export default function TanyaAI() {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const [loading, setLoading] = useState(false);

  async function tanya() {
    if (!pertanyaan) return;
    setLoading(true);
    setJawaban("");
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan }),
    });
    const data = await res.json();
    setJawaban(data.jawaban);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">🎓 EduSite</a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="text-yellow-400 font-bold">Tanya AI</a>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Tanya <span className="text-yellow-400">AI Tutor</span>
        </h1>
        <p className="text-slate-400 text-center mb-10">
          Tanya apapun — matematika, sains, sejarah, bahasa, atau masalah apapun.
        </p>
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <textarea
            className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400"
            rows={4}
            placeholder="Contoh: Jelaskan apa itu fotosintesis dengan cara mudah dipahami anak SD..."
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
          />
          <button
            onClick={tanya}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {loading ? "AI sedang berpikir..." : "Tanya Sekarang"}
          </button>
        </div>
        {jawaban && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="font-bold text-yellow-400 mb-4">Jawaban AI:</h2>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{jawaban}</p>
          </div>
        )}
      </div>
    </main>
  );
}
