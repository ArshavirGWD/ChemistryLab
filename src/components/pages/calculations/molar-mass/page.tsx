import { MolarProps } from "@/types/molar-mass";

const MolarMass = ({
  formula,
  handleCaculate,
  mass,
  setFormula,
}: MolarProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 h-[600px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0  h-[500px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-2000" />

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-300 drop-shadow-lg">
          محاسبه‌گر جرم مولی
        </h1>

        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="مثلاً H₂O یا NaCl"
          className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all backdrop-blur-sm"
        />

        <button
          onClick={handleCaculate}
          className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-gray-900 font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-cyan-400/40"
        >
          محاسبه
        </button>

        {mass !== null && (
          <p className="mt-6 text-center text-lg bg-white/10 p-3 rounded-lg shadow-inner border border-white/10 backdrop-blur-sm">
            جرم مولی:{" "}
            <span className="font-bold text-cyan-300">
              {mass.toLocaleString("fa-IR")} گرم بر مول
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default MolarMass;
