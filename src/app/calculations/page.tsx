"use client";
import { useState } from "react";
import { calculateMolarMass } from "@/utils/molecularMass";
import Swal from "sweetalert2";
import AverageAtomicMass from "@/components/pages/calculations/average-atom/page";
import MolarMass from "@/components/pages/calculations/molar-mass/page";

export default function CalculatorPage() {
  const [formula, setFormula] = useState("");
  const [mass, setMass] = useState<number | null>(null);
  const [calculateModde, setCalculateMode] = useState<boolean>(true);
  const handleCalculate = () => {
    if (formula.trim() === "") {
      Swal.fire({
        title: "فرمول خالی است",
        text: "لطفاً فرمول ترکیب را وارد نمایید",
        icon: "warning",
        confirmButtonText: "باشه",
        background: "#1e293b",
        color: "#fff",
      });
      return;
    }

    try {
      const result = calculateMolarMass(formula);
      setMass(result);
    } catch (e: unknown) {
      setMass(null);
      Swal.fire({
        title: "ترکیب ناشناخته",
        text:
          e instanceof Error
            ? e.message || "لطفاً فرمول ترکیب را به درستی وارد نمایید"
            : "خطایی رخ داد: " + String(e),
        icon: "error",
        confirmButtonText: "باشه",
        background: "#1e293b",
        color: "#fff",
        iconColor: "#22d3ee",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-800 text-white overflow-hidden">
      {calculateModde ? (
        <>
          <MolarMass
            formula={formula}
            handleCaculate={handleCalculate}
            mass={mass}
            setFormula={setFormula}
          />
        </>
      ) : (
        <AverageAtomicMass />
      )}
      <button
        className="w-fit p-5 mt-6 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-gray-900 font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-cyan-400/40"
        onClick={() => setCalculateMode(!calculateModde)}
      >
        {calculateModde ? "محسابه جرم اتمی میانگین" : "محاسبه جرم مولی"}
      </button>
    </div>
  );
}
