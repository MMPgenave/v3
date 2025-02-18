import { routes } from "../lib/config/routes";

export async function signOut() {
  const url = routes.SIGNOUT;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(`sign-out data:${JSON.stringify(data)}`)
    return data;
  } catch (error) {

    return {
      message: "Token has expired",
    };
  }
}
