import { mean, median, std, mode, FactoryFunction } from "mathjs";

interface FactoryFunctionMap {
  [key: string]: FactoryFunction<any>;
}

export const math: FactoryFunctionMap = {
  mean,
  median,
  std,
  mode: (args) => mode(args)[0]
};
