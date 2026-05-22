"use client";
import { useState, useEffect } from "react";

export default function TanyaAI() {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const [loading, setLoading] = useState(false);
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("riwayat");
    if (saved) setRiwayat(JSON.parse(saved));
  }, []);

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
    const baru = [...riwayat, { tanya: pertanyaan, jawab: data.jawaban }];
    setRiwayat(baru);
    localStorage.setItem("riwayat", JSON.stringify(baru));
  }

  function hapusRiwayat() {
    setRiwayat([]);
    localStorage.removeItem("riwayat");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">EduSite</a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="text-yellow-400 font-bold">Tanya AI</a>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Tanya <span className="text-yellow-400">AI Tutor</span></h1>
        <p className="text-slate-400 text-center mb-10">Tanya apapun dan dapatkan jawaban detail dan mudah dipahami.</p>
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <textarea className="w-full bg-slate-800 text-white rounded-xl p-4 text-sm resize-none border border-slate-700 focus:outline-none focus:border-yellow-400" rows={4} placeholder="Contoh: Jelaskan apa itu fotosintesis..." value={pertanyaan} onChange={(e) => setPertanyaan(e.target.value)} />
          <button onClick={tanya} disabled={loading} className="mt-4 w-full bg-yellow-400 text-slate-950 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50">
            {loading ? "AI sedang berpikir..." : "Tanya Sekarang"}
          </button>
        </div>
        {jawaban && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-yellow-400">Jawaban AI:</h2>
              <button onClick={() => navigator.clipboard.writeText(jawaban)} className="text-xs bg-slate-700 hover:bg-yellow-400 hover:text-slate-950 px-3 py-1 rounded-full transition">Copy Jawaban</button>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{jawaban}</p>
          </div>
        )}
        {riwayat.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Riwayat Pertanyaan</h2>
              <button onClick={hapusRiwayat} className="text-red-400 text-sm hover:text-red-300">Hapus Semua</button>
            </div>
            {riwayat.slice().reverse().map((item, i) => (
              <div key={i} className="bg-slate-900 rounded-xl p-4 border border-slate-800 mb-3">
                <p className="text-yellow-400 text-sm font-bold mb-2">Pertanyaan: {item.tanya}</p>
                <p className="text-slate-400 text-sm line-clamp-3">{item.jawab}</p>
                <button onClick={() => { setPertanyaan(item.tanya); setJawaban(item.jawab); }} className="text-xs text-slate-500 hover:text-yellow-400 mt-2">Lihat jawaban lengkap</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}