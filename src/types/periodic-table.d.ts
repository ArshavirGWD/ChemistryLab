declare module "periodic-table" {
  interface ElementData {
    name: string;
    symbol: string;
    atomicNumber: number;
    atomicMass: number;
    groupBlock?: string;
  }

  const elements: {
    all: () => ElementData[];
    [key: string]: any;
  };

  export default elements;
}
