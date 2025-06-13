import { Box, Typography, Chip } from "@mui/material";
import { symbolColors } from "../../constants/constants";

const aminoAcidsMap: Record<string, string> = {
  A: "Alanine",
  R: "Arginine",
  N: "Asparagine",
  D: "Aspartic acid",
  C: "Cysteine",
  E: "Glutamic acid",
  Q: "Glutamine",
  G: "Glycine",
  H: "Histidine",
  I: "Isoleucine",
  L: "Leucine",
  K: "Lysine",
  M: "Methionine",
  F: "Phenylalanine",
  P: "Proline",
  S: "Serine",
  T: "Threonine",
  W: "Tryptophan",
  Y: "Tyrosine",
  V: "Valine",
  "-": "Gap",
};

export const Legend = () => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
    {Object.entries(symbolColors).map(([key, color]) => (
      <Chip
        key={key}
        label={`${key} — ${aminoAcidsMap[key] || "Unknown"}`}
        sx={{
          backgroundColor: color,
          color: "#000",
          fontWeight: 500,
        }}
      />
    ))}
  </Box>
);
