declare module "chemical-formula" {
  export default class ChemicalFormula {
    constructor(formula: string);
    relativeMolecularMass(): number;
    getComposition(): Record<string, number>;
  }
}
