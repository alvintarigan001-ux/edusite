import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { pertanyaan } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "Kamu adalah guru AI yang sabar dan pandai menjelaskan. Jawab setiap pertanyaan dengan detail, terperinci, jelas, dan mudah dipahami untuk semua usia. Gunakan Bahasa Indonesia yang sederhana."
          },
          {
            role: "user",
            content: pertanyaan
          }
        ],
        max_tokens: 1024,
      }),
    });

    const data = await response.json();
    const jawaban = data.choices[0].message.content;
    return NextResponse.json({ jawaban });

  } catch (error) {
    return NextResponse.json({ jawaban: "Terjadi error: " + error }, { status: 500 });
  }
}