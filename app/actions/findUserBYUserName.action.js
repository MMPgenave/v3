import { routes } from "../lib/config/routes";

export async function findUserBYUserName(UserName) {
  try {
    const res = await fetch(`${routes.SEARCHUSERS}`, {
      method: "POST",
      headers: {
        "Contenst-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
      }),
    });
    const data = await res.json();
    // console.log(`friend is: ${JSON.stringify(data)}`);
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
      return data.Data.Users[0];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
