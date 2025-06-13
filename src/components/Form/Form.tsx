import { FormProvider } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Stack, Snackbar, Alert } from "@mui/material";

import { StyledForm } from "./styles";
import { FormInputField } from "./FormInputField";
import { useFormWithValidation } from "../hooks/useFormWithValidation";
import { useAminoValidation } from "../hooks/useAminoValidation";
import { useFormAlert } from "../hooks/useFormAlert";

export const Form = () => {
  const methods = useFormWithValidation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const queryClient = useQueryClient();
  const { filterInput, getValidationRules } = useAminoValidation();
  const { open, message, severity, showAlert, handleClose } = useFormAlert();

  const onSubmit = (data: { first: string; second: string }) => {
    if (data.first.length !== data.second.length) {
      showAlert("error", "Аминокислотные последовательности не равны");
      return;
    }

    queryClient.setQueryData(["formData"], data);
    showAlert("success", "Успешно отправлено!");
  };

  const resetForm = () => {
    reset();
    queryClient.setQueryData(["formData"], { first: "", second: "" });
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="formContainer">
          <FormInputField
            label="First Amino"
            placeholder="First amino"
            register={register("first", getValidationRules("Первая последовательность"))}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = filterInput(target.value);
            }}
            error={errors.first}
          />

          <FormInputField
            label="Second Amino"
            placeholder="Second amino"
            register={register("second", getValidationRules("Вторая последовательность"))}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = filterInput(target.value);
            }}
            error={errors.second}
          />
        </div>

        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={resetForm}
          >
            Сбросить
          </Button>
        </Stack>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </StyledForm>
    </FormProvider>
  );
};
