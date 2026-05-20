export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <nav className="bg-blue-900 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">EduSite</h1>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-yellow-300">Beranda</a>
          <a href="#" className="hover:text-yellow-300">Materi</a>
          <a href="#" className="hover:text-yellow-300">Tanya AI</a>
        </div>
      </nav>
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Belajar Apa Saja,<br/>Untuk Semua Usia</h2>
        <p className="text-blue-200 text-lg mb-8">Tanya apapun, dapatkan jawaban detail dan mudah dipahami</p>
        <button className="bg-yellow-400 text-blue-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300">
          Mulai Belajar Sekarang
        </button>
      </section>
    </main>
  )
}