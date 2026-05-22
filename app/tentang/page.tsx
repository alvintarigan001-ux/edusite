export default function Tentang() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="text-xl font-bold text-yellow-400">EduSite</a>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
          <a href="/tentang" className="text-yellow-400 font-bold">Tentang</a>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Tentang <span className="text-yellow-400">EduSite</span></h1>
        <p className="text-slate-400 text-center mb-12">Platform pendidikan bertenaga AI untuk semua usia</p>
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Apa itu EduSite?</h2>
          <p className="text-slate-300 leading-relaxed">EduSite adalah platform pendidikan berbasis AI yang dirancang untuk membantu semua orang belajar dengan mudah. Dari anak SD hingga orang dewasa, semua bisa mendapatkan jawaban yang detail, terperinci, dan mudah dipahami.</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Fitur Unggulan</h2>
          <ul className="text-slate-300 space-y-3">
            <li>AI Tutor yang menjawab pertanyaan dengan detail</li>
            <li>Materi lengkap untuk SD, SMP, SMA, dan Kuliah</li>
            <li>Riwayat pertanyaan tersimpan otomatis</li>
            <li>Tombol copy jawaban dengan satu klik</li>
            <li>Tampilan modern dan mudah digunakan</li>
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Dibuat Oleh</h2>
          <p className="text-slate-300">EduSite dibuat oleh <strong className="text-white">Alvin Tarigan</strong> — seorang pemula yang berhasil membangun website bertenaga AI dari nol!</p>
        </div>
        <div className="mt-8 text-center">
          <a href="/tanya" className="bg-yellow-400 text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Mulai Belajar Sekarang</a>
        </div>
      </div>
      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">2026 EduSite - Platform Pendidikan untuk Semua</footer>
    </main>
  )
}