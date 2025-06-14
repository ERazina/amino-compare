export const useAminoValidation = () => {
  const allowedPattern = /^[ARNDCEQGHILKMPSTWYVarndceqhilmpstwyv-]+$/;

  const filterInput = (value: string) =>
    value.toUpperCase().replace(/[^ARNDCEQGHILKMPSTWYV-]/g, "");

  const getValidationRules = (fieldName = "Поле") => ({
    required: `${fieldName} обязательно`,
    pattern: {
      value: allowedPattern,
      message: "Недопустимые символы",
    },
  });

  return { filterInput, getValidationRules };
};
