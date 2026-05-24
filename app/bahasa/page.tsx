"use client";
import { useState } from "react";

export default function Bahasa() {
  const [kalimat, setKalimat] = useState("");
  const [mode, setMode] = useState("koreksi");
  const [hasil, setHasil] = useState("");
  const [loading, setLoading] = useState(false);

  async function proses() {
    if (!kalimat) return;
    setLoading(true);
    setHasil("");
    const prompts = {
      koreksi: "Koreksi kalimat bahasa Inggris berikut. Jelaskan kesalahannya dan berikan kalimat yang benar: " + kalimat,
      percakapan: "Balas pesan berikut dalam bahasa Inggris, lalu berikan terjemahannya dalam bahasa Indonesia dan tips penggunaan kata: " + kalimat,
      vocab: "Jelaskan arti kata atau frasa bahasa Inggris berikut dengan contoh kalimat penggunaannya: " + kalimat,
      grammar: "Jelaskan aturan grammar bahasa Inggris yang berkaitan dengan: " + kalimat,
    };
    const res = await fetch("/api/tanya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pertanyaan: prompts[mode] }),
    });
    const data = await res.json();
    setHasil(data.jawaban);
    setLoading(false);
  }

  const modes = [
    { id: "koreksi", label: "Koreksi Kalimat" },
    { id: "percakapan", label: "Latihan Percakapan" },
    { id: "vocab", label: "Kosakata" },
    { id: "grammar", label: "Grammar" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Latihan <span className="text-yellow-400">Bahasa Inggris</span></h1>
        <p className="text-slate-400 text-center mb-10">Latih kemampuan bahasa Inggrismu dengan bantuan AI!</p>
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {modes.map((m) => (
              <button key={m.id} onClick={() => setMode(m.id)} className={"px-4 py-1.5 rounded-full text-sm font-medium transition " + (mode === m.id ? "bg-yellow-400 text-slate-950" : "bg-slate-800 hover:bg-slate-700")}>{m.label}</button>
            ))}
          </div>
          <textarea className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400" rows={4} placeholder="Ketik kalimat atau kata bahasa Inggris..." value={kalimat} onChange={(e) => setKalimat(e.target.value)} />
          <button onClick={proses} disabled={loading} className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50">
            {loading ? "AI sedang memproses..." : "Mulai Latihan"}
          </button>
        </div>
        {hasil && (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Hasil:</h2>
              <button onClick={() => navigator.clipboard.writeText(hasil)} className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition">Copy</button>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{hasil}</p>
          </div>
        )}
      </div>
      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">2026 EduSite</footer>
    </main>
  );
}