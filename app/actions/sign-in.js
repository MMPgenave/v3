import { routes } from "../lib/config/routes";

export async function signIn(values) {
  const url = routes.SIGNIN;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    const data = await res.json();
    if (data.status === 200) {
      // the fetch to backend was successful , now to check the response
      if (data.Code === 200) {
        return {
          status: "success",
          message: "Login Successful , Redirecting to Dashboard...",
          data,
        };
      }
      if (data.Message === "Unauthorized" || data.errors) {
        return {
          status: "error",
          message: "Wrong or invalid email or password",
        };
      }
    }
    if (data.status === 500) {
      return {
        status: "error",
        message: "Oops! error occurred",
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: error,
    };
  }
}
