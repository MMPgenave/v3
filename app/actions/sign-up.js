import { routes } from "../lib/config/routes";

export async function signUp(values) {
  try {
    const res = await fetch(routes.SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
        referralID: values.referralID,
      }),
    });
    const data = await res.json();
    console.log(`sign up data :${JSON.stringify(data)}`);
        console.log(`API_URL :${process.env.API_URL}`);

    if (res.statusCode === 422) {
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      return {
        status: "success",
        message: "Sign Up Successful , Redirecting to Login Page...",
      };
    }
  } catch (error) {
    console.log("error in Sign Up", error);
  }
}
