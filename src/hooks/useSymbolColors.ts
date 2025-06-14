import { symbolColors } from "../constants";

export const useSymbolColors = () => {
  const getColor = (char: string) => symbolColors[char.toUpperCase()] || "#eee";

  return { getColor };
};
