"use client";
import { useState } from "react";

export default function AverageAtomicMass() {
  const [isotopes, setIsotopes] = useState([{ mass: "", abundance: "" }]);
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...isotopes];
    updated[index] = { ...updated[index], [field]: value };
    setIsotopes(updated);
  };

  const addIsotope = () => {
    setIsotopes([...isotopes, { mass: "", abundance: "" }]);
  };
  const deleteIsotope = (isotope: number) => {
    const deletedIsotope = isotopes.filter((_, i) => i !== isotope);
    setIsotopes(deletedIsotope);
  };
  const calculate = () => {
    let total = 0;
    let sumAbundance = 0;

    isotopes.forEach((iso) => {
      const mass = parseFloat(iso.mass);
      const abundance = parseFloat(iso.abundance);
      if (!isNaN(mass) && !isNaN(abundance)) {
        total += mass * abundance;
        sumAbundance += abundance;
      }
    });

    if (sumAbundance === 0) {
      setResult(null);
      return;
    }

    const avgMass = total / sumAbundance;
    setResult(avgMass);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-2000" />

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md transition-transform duration-300 hover:scale-[1.02] text-center">
        <h1 className="text-3xl font-bold text-cyan-300 mb-6 drop-shadow-lg">
          ⚗️ محاسبه‌گر جرم اتمی میانگین
        </h1>

        {isotopes.map((iso, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="جرم ایزوتوپ"
              value={iso.mass}
              onChange={(e) => handleChange(i, "mass", e.target.value)}
              className="flex-1 p-3 rounded-lg w-15 border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all backdrop-blur-sm"
            />
            <input
              type="text"
              placeholder="فراوانی (٪)"
              value={iso.abundance}
              onChange={(e) => handleChange(i, "abundance", e.target.value)}
              className="flex-1 p-3 rounded-lg w-16 border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all backdrop-blur-sm"
            />
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-2 text-sm font-bold transition"
              onClick={() => deleteIsotope(i)}
            >
              حذف
            </button>
          </div>
        ))}

        <button
          onClick={addIsotope}
          className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-gray-900 font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-cyan-400/40 mt-2"
        >
          افزودن ایزوتوپ
        </button>

        <button
          onClick={calculate}
          className="w-full cursor-pointer bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-gray-900 font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-indigo-400/40 mt-4"
        >
          محاسبه
        </button>

        {result !== null && (
          <p className="mt-6 text-center text-lg bg-white/10 p-3 rounded-lg shadow-inner border border-white/10 backdrop-blur-sm">
            جرم اتمی میانگین:{" "}
            <span className="font-bold text-cyan-300 ml-0.5">amu</span>
            <span dir="rtl" className="font-bold text-cyan-300">
              {result.toLocaleString("fa-IR")} 
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
