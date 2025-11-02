"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-blue-900 text-white p-6">
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center border border-cyan-400/20">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-6">
          🔬 Chemistry Lab
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          به آزمایشگاه شیمی خوش آمدید! اینجا می‌تونی جرم مولی ترکیبات رو حساب
          کنی، جدول تناوبی رو ببینی و نمونه‌سؤالات شیمی رو تمرین کنی.
        </p>

      </div>
    </div>
  );
}
