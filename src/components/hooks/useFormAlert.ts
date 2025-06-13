import { useState } from "react";

export const useFormAlert = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const showAlert = (type: "success" | "error", msg: string) => {
    setSeverity(type);
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return {
    open,
    message,
    severity,
    showAlert,
    handleClose,
  };
};
