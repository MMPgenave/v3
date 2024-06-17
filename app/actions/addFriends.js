import { routes } from "../lib/config/routes";

export async function addToFriend(ID) {
  try {
    const res = await fetch(routes.ADDFRIENDS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID,
      }),
    });
    const data = await res.json();
    if (res.statusCode === 422) {
      toast(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      toast(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      toast(` successfully friend added`);

      return;
    }
  } catch (error) {
    console.log("error in Sign Up", error);
  }
}
