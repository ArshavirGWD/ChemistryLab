const atomicMasses: Record<string, number> = {
  H: 1.008,
  He: 4.0026,
  Li: 6.94,
  Be: 9.0122,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Na: 22.989,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  K: 39.098,
  Ca: 40.078,
  Fe: 55.845,
  Cu: 63.546,
  Zn: 65.38,
  Ag: 107.868,
  I: 126.9,
  Ba: 137.327,
  Au: 196.967,
  Hg: 200.59,
  Pb: 207.2,
};

export function calculateMolarMass(formula: string): number {
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  let totalMass = 0;

  while ((match = regex.exec(formula)) !== null) {
    const element = match[1];
    const count = parseInt(match[2] || "1", 10);

    const mass = atomicMasses[element];
    if (!mass) throw new Error(`عنصر ناشناخته: ${element}`);

    totalMass += mass * count;
  }

  return totalMass;
}
