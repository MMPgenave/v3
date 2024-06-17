import { routes } from "@/app/lib/config/routes";

export async function getAuthorFriends() {
  try {
    const response = await fetch(`${routes.GETUSERFRIEND}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.Data[0];
  } catch (error) {
    console.log(`Error in getAuthorFriends is:${error}`);
  }
}
