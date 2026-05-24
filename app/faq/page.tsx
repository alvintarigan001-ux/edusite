"use client";
import { useState } from "react";

const faqs = [
  { pertanyaan: "Apa itu EduSite?", jawaban: "EduSite adalah platform pendidikan berbasis AI yang membantu semua orang belajar dengan mudah. Dari anak SD hingga dewasa, semua bisa mendapatkan jawaban detail dan mudah dipahami." },
  { pertanyaan: "Apakah EduSite gratis?", jawaban: "Ya! EduSite sepenuhnya gratis untuk digunakan. Kamu bisa tanya apapun, buat kuis, terjemahkan teks, dan rangkum materi tanpa biaya apapun." },
  { pertanyaan: "Bagaimana cara menggunakan AI Tutor?", jawaban: "Klik menu Tanya AI di navbar, ketik pertanyaanmu di kotak teks, lalu klik tombol Tanya Sekarang. AI akan memberikan jawaban detail dalam beberapa detik." },
  { pertanyaan: "Apakah jawaban AI selalu benar?", jawaban: "AI berusaha memberikan jawaban seakurat mungkin, namun tetap disarankan untuk memverifikasi informasi penting dari sumber terpercaya. Gunakan EduSite sebagai alat bantu belajar." },
  { pertanyaan: "Bagaimana cara membuat kuis?", jawaban: "Klik menu Kuis di navbar, ketik topik yang ingin dibuatkan soalnya, lalu klik Buat Kuis Sekarang. AI akan membuat 5 soal pilihan ganda lengkap dengan jawaban." },
  { pertanyaan: "Bahasa apa saja yang bisa diterjemahkan?", jawaban: "EduSite bisa menerjemahkan ke Bahasa Inggris, Arab, Jepang, Korea, Mandarin, Spanyol, Prancis, dan Jerman. Pilih bahasa tujuan di halaman Terjemah." },
  { pertanyaan: "Apakah riwayat pertanyaan tersimpan?", jawaban: "Ya! Riwayat pertanyaanmu tersimpan otomatis di browser. Kamu bisa melihat pertanyaan sebelumnya dan klik untuk melihat jawaban lengkapnya lagi." },
  { pertanyaan: "Bagaimana cara berbagi jawaban ke WhatsApp?", jawaban: "Setelah AI memberikan jawaban, klik tombol Bagikan WA di sebelah jawaban. WhatsApp akan terbuka otomatis dengan jawaban yang siap dikirim." },
];

export default function FAQ() {
  const [buka, setBuka] = useState(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Pertanyaan <span className="text-yellow-400">Umum</span>
        </h1>
        <p className="text-slate-400 text-center mb-12">
          Jawaban untuk pertanyaan yang sering ditanyakan tentang EduSite
        </p>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
              <button
                onClick={() => setBuka(buka === i ? null : i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-slate-800 transition"
              >
                <span className="font-medium">{f.pertanyaan}</span>
                <span className="text-yellow-400 text-xl">{buka === i ? "−" : "+"}</span>
              </button>
              {buka === i && (
                <div className="px-6 pb-4">
                  <p className="text-slate-400 leading-relaxed">{f.jawaban}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Masih ada pertanyaan lain?</p>
          <a href="/tanya" className="bg-yellow-400 text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
            Tanya AI Sekarang
          </a>
        </div>
      </div>

      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800">
        2026 EduSite - Platform Pendidikan untuk Semua
      </footer>
    </main>
  )
}