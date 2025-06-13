import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputFieldProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const FormInputField = ({
  label,
  placeholder,
  register,
  error,
  onInput,
}: FormInputFieldProps) => (
  <TextField
    fullWidth
    label={label}
    placeholder={placeholder}
    error={!!error}
    helperText={error?.message}
    {...register}
    onInput={onInput}
    variant="outlined"
    margin="normal"
  />
);
