import * as Yup from "yup";

export const validateSchema = Yup.object().shape({
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
