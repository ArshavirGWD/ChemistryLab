"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white p-6">
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center border border-cyan-400/20">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-6">
          🔬 Chemistry Lab
        </h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          به <span className="text-cyan-300 font-semibold">شیمی‌یار</span> خوش آمدید.  
          در این سامانه می‌توانید جرم مولی ترکیبات شیمیایی را محاسبه کنید،  
          به جدول تناوبی عناصر دسترسی داشته باشید،  
          و مجموعه‌ای از نمونه‌سؤالات تخصصی شیمی را برای تمرین مشاهده نمایید.
        </p>
      </div>
    </div>
  );
}
