"use client";
import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#020817";
      document.body.style.color = "white";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#ffffff";
      document.body.style.color = "#0f172a";
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-slate-950 font-bold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition text-sm"
    >
      {dark ? "Terang" : "Gelap"}
    </button>
  );
}