import { Symbol, GridWrapper, Row } from "./styles";
import { Snackbar, Alert } from "@mui/material";
import { useClipboardAlert } from "../hooks/useClipboardAlert";
import { useSymbolColors } from "../hooks/useSymbolColors";
import { Legend } from "components/Legend/Legend";

type SymbolsProps = {
  formData: {
    first: string;
    second: string;
  };
};

export const Symbols = ({ formData }: SymbolsProps) => {
  const { open, copyToClipboard, handleClose } = useClipboardAlert();
  const { getColor } = useSymbolColors();

  if (!formData) return null;

  const { first, second } = formData;
  const firstArr = first.split("");
  const secondArr = second.split("");
  const maxLength = Math.max(firstArr.length, secondArr.length);

  const renderRow = (
    symbols: string[],
    compareWith?: string[],
    isBottomRow = false
  ) =>
    Array.from({ length: maxLength }).map((_, index) => {
      const currentChar = symbols[index] || "";
      const referenceChar = compareWith?.[index] || "";
      const isDifferent =
        isBottomRow &&
        currentChar.toUpperCase() !== referenceChar.toUpperCase();

      const color = isBottomRow
        ? isDifferent
          ? getColor(currentChar)
          : "transparent"
        : getColor(currentChar);

      return (
        <Symbol key={`${isBottomRow ? "bottom" : "top"}-${index}`} $color={color}>
          {currentChar}
        </Symbol>
      );
    });

  const handleCopy = () => {
    const selection = window.getSelection()?.toString();
    if (selection) {
      copyToClipboard(selection);
    }
  };

  return (
    <GridWrapper onPointerUp={handleCopy}>
      <Row>{renderRow(firstArr)}</Row>
      <Row>{renderRow(secondArr, firstArr, true)}</Row>
      <Legend />

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Скопировано в буфер обмена!
        </Alert>
      </Snackbar>
    </GridWrapper>
  );
};
