import { routes } from "../lib/config/routes";

export async function getAuthorData() {
  const url = routes.GETUSERINFO;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(`user data is :${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
