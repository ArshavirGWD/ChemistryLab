"use client";
import Link from "next/link";
import { FlaskConical, Table2, FileQuestion } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white p-6">
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center border border-cyan-400/20">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-6">
          🔬 Chemistry Lab
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          به آزمایشگاه شیمی خوش آمدید! اینجا می‌تونی جرم مولی ترکیبات رو حساب
          کنی، جدول تناوبی رو ببینی و نمونه‌سؤالات شیمی رو تمرین کنی.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <Link
            href="/calculator"
            className="group bg-gray-800/60 hover:bg-cyan-500/20 transition-all rounded-2xl p-6 flex flex-col items-center shadow-md border border-cyan-400/20 hover:shadow-cyan-400/40"
          >
            <FlaskConical className="w-10 h-10 text-cyan-300 group-hover:scale-110 transition-transform" />
            <h2 className="mt-3 font-bold text-lg">محاسبه‌گر جرم مولی</h2>
          </Link>

          <Link
            href="/periodic-table"
            className="group bg-gray-800/60 hover:bg-indigo-500/20 transition-all rounded-2xl p-6 flex flex-col items-center shadow-md border border-indigo-400/20 hover:shadow-indigo-400/40"
          >
            <Table2 className="w-10 h-10 text-indigo-300 group-hover:scale-110 transition-transform" />
            <h2 className="mt-3 font-bold text-lg">جدول تناوبی</h2>
          </Link>

          <Link
            href="/quiz"
            className="group bg-gray-800/60 hover:bg-pink-500/20 transition-all rounded-2xl p-6 flex flex-col items-center shadow-md border border-pink-400/20 hover:shadow-pink-400/40"
          >
            <FileQuestion className="w-10 h-10 text-pink-300 group-hover:scale-110 transition-transform" />
            <h2 className="mt-3 font-bold text-lg">نمونه سوالات</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
