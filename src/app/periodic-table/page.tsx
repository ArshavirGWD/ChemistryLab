"use client";
import { ElementsProps } from "@/types/elements";
import elementsFa from "@/utils/elements-fa.json";
import { useState } from "react";

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<ElementsProps | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-5 mt-15 text-cyan-300">
        جدول تناوبی عناصر
      </h1>

      <div
        dir="rtl"
        className="grid gap-2 p-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-13"
      >
        {elementsFa.map((el) => (
          <button
            onClick={() => setSelectedElement(el)}
            key={el.symbol}
            className="bg-gray-800/70 cursor-pointer backdrop-blur-sm hover:bg-cyan-600/40 transition rounded-lg p-3 flex flex-col items-center text-sm text-center shadow-lg"
          >
            <span className="text-lg font-bold">{el.symbol}</span>
            <span className="text-xs text-gray-300">{el.name}</span>
          </button>
        ))}
      </div>

      {selectedElement && (
        <div
          dir="rtl"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-sm w-full text-center border border-cyan-400/30">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2">
              {selectedElement.name}
            </h2>
            <p className="text-xl text-white mb-1">
              نماد: {selectedElement.symbol}
            </p>
            <p className="text-white mb-1">
              عدد اتمی: {selectedElement.atomicNumber.toLocaleString("fa-IR")}
            </p>
            <p className="text-white mb-1">
              جرم اتمی: {selectedElement.atomicMass.toLocaleString("fa-IR")}
            </p>

            <button
              onClick={() => setSelectedElement(null)}
              className="mt-4 cursor-pointer px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-md transition"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
