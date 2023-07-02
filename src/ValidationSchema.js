import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  address: Yup.string().min(10, "Too Short").max(200, "Too Long").required,
  country: Yup.string().required,
  gender: Yup.string().required,
  hobbies: Yup.string().required,
});
