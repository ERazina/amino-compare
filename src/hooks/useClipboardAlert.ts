import { useState } from "react";

export const useClipboardAlert = () => {
  const [open, setOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    if (!text?.trim()) return;

    const cleaned = text.replace(/\n/g, "");
    navigator.clipboard.writeText(cleaned).then(
      () => {
        setOpen(true);
        setTimeout(() => setOpen(false), 1000);
      },
      (err) => console.error("Ошибка при копировании:", err)
    );
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return { open, copyToClipboard, handleClose };
};
