import { routes } from "@/app/lib/config/routes";
export async function getUserFriendsOf() {
  try {
    const response = await fetch(`${routes.GETUSERFRIENDOF}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.Data[0];
  } catch (error) {
    console.log(`Error in getUserFriendsOf is:${error}`);
  }
}
