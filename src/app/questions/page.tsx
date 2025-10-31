"use client";

import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  { question: "جرم مولی آب چند گرم بر مول است؟", answer: "18.015 g/mol" },
  { question: "عدد اتمی هیدروژن چند است؟", answer: "1" },
  { question: "NaCl چه نوع ترکیبی است؟", answer: "نمک یونی" },
  { question: "فرمول شیمیایی دی‌اکسید کربن چیست؟", answer: "CO2" },
  { question: "عدد اتمی اکسیژن چند است؟", answer: "8" },
];

export default function SampleQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white flex flex-col items-center">
      <h1 className="text-3xl mt-22 font-bold mb-6 text-cyan-300 text-center">
        نمونه سوالات شیمی پایه دهم
      </h1>

      <div className="w-full max-w-3xl space-y-4">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-semibold text-white">{q.question}</span>
              <span className="text-cyan-300 font-bold">
                {openIndex === idx ? "-" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 border-t border-cyan-400/30 text-cyan-200">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
