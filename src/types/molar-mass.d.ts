import React from "react";

export interface MolarProps {
  mass: number | null;
  formula: string;
  handleCaculate: () => void;
  setFormula: React.Dispatch<React.SetStateAction<string>>;
}
