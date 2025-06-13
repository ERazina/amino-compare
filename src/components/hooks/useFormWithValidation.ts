import { useForm } from "react-hook-form";
import type { Inputs } from "@custom-types";

export const useFormWithValidation = () => {
  return useForm<Inputs>({
    defaultValues: {
      first: "",
      second: "",
    },
    mode: "onBlur",
  });
};
