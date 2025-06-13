import { useForm } from "react-hook-form";
import { Inputs } from "@custom-types/types";

export const useFormWithValidation = () => {
  return useForm<Inputs>({
    defaultValues: {
      first: "",
      second: "",
    },
    mode: "onBlur",
  });
};
