import * as yup from "yup"; //import all exports from the yup

export const userSchemaValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    phoneNo: yup.string().matches(/^[0-9]{8}$/, "Phone number must be exactly 8 digits").required("Phone Number is required"),
    email: yup
      .string()
      .email("Not valid email format")
      .required("Email is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });
  