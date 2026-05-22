export default function Materi() {
  const kategori = [
    { level: "SD (6-12 tahun)", emoji: "🎒", warna: "border-green-500", topik: ["Matematika Dasar", "IPA", "Bahasa Indonesia", "IPS", "Agama", "Seni Budaya"] },
    { level: "SMP (12-15 tahun)", emoji: "📚", warna: "border-blue-500", topik: ["Aljabar", "Fisika", "Kimia", "Biologi", "Sejarah", "Bahasa Inggris"] },
    { level: "SMA (15-18 tahun)", emoji: "🎓", warna: "border-purple-500", topik: ["Kalkulus", "Fisika Lanjut", "Kimia Organik", "Ekonomi", "Sosiologi", "Sastra"] },
    { level: "Kuliah & Dewasa", emoji: "🏛️", warna: "border-yellow-500", topik: ["Pemrograman", "Bisnis", "Psikologi", "Hukum", "Kedokteran", "Teknik"] }
  ]
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="text-xl font-bold text-yellow-400">🎓 EduSite</a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="text-yellow-400 font-bold">Materi</a>
          <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Materi <span className="text-yellow-400">Semua Tingkat</span></h1>
        <p className="text-slate-400 text-center mb-12">Pilih topik yang ingin kamu pelajari, lalu tanya AI untuk penjelasan detail!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kategori.map((kat) => (
            <div key={kat.level} className={"bg-slate-900 rounded-2xl p-6 border-l-4 " + kat.warna + " border border-slate-800"}>
              <h2 className="text-xl font-bold mb-4">{kat.emoji} {kat.level}</h2>
              <div className="flex flex-wrap gap-2">
                {kat.topik.map((t) => (
                  <a key={t} href={"/tanya?q=" + encodeURIComponent("Jelaskan materi " + t + " dengan detail dan mudah dipahami")} className="bg-slate-800 hover:bg-yellow-400 hover:text-slate-950 text-sm px-3 py-1.5 rounded-full transition font-medium">{t}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">Tidak ada topik yang kamu cari?</h3>
          <p className="text-slate-400 mb-6">Tanya langsung ke AI Tutor!</p>
          <a href="/tanya" className="bg-yellow-400 text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Tanya AI Sekarang</a>
        </div>
      </div>
      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">© 2026 EduSite</footer>
    </main>
  )
}
