export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-yellow-400">EduSite</h1>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-yellow-400">Beranda</a>
          <a href="/materi" className="hover:text-yellow-400">Materi</a>
          <a href="/tanya" className="hover:text-yellow-400">Tanya AI</a>
        </div>
      </nav>
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-yellow-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-6">Platform Pendidikan AI #1</div>
        <h2 className="text-5xl font-bold mb-6 leading-tight">Belajar Apa Saja,<br/><span className="text-yellow-400">Untuk Semua Usia</span></h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Tanya apapun dan dapatkan jawaban detail, terperinci, dan mudah dipahami dari AI.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/tanya" className="bg-yellow-400 text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Tanya AI Sekarang</a>
          <a href="/materi" className="border border-slate-600 px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">Lihat Materi</a>
        </div>
      </section>
      <section className="px-6 py-16 bg-slate-900">
        <h3 className="text-2xl font-bold text-center mb-12">Kenapa EduSite?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <div className="text-3xl mb-4">AI</div>
            <h4 className="font-bold mb-2">AI Tutor Canggih</h4>
            <p className="text-slate-400 text-sm">Jawaban detail dan mudah dipahami untuk setiap pertanyaan</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <div className="text-3xl mb-4">Buku</div>
            <h4 className="font-bold mb-2">Semua Tingkat Usia</h4>
            <p className="text-slate-400 text-sm">Dari anak SD sampai orang dewasa, semua ada materinya</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <div className="text-3xl mb-4">Kilat</div>
            <h4 className="font-bold mb-2">Jawaban Instan</h4>
            <p className="text-slate-400 text-sm">Tidak perlu tunggu lama, jawaban langsung tersedia</p>
          </div>
        </div>
      </section>
      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">2026 EduSite - Platform Pendidikan untuk Semua</footer>
    </main>
  )
}