import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .min(8, "Too Short!")
    .required("Required"),
  // .matches(/(?=.*[0-9])/, "password must contain at least one number")
  // .matches(
  //   /(?=.*[a-z])/,
  //   "password must contain at least one lowercase letter"
  // )
  // .matches(
  //   /(?=.*[A-Z])/,
  //   "password must contain at least one uppercase letter"
  // ),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  referralID: Yup.string().nullable()
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const JoinGameSchema = Yup.object().shape({
  code: Yup.string().required("Enter the Room ID to join the game"),
});
