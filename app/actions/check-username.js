import { routes } from "../lib/config/routes";

export async function checkUsername(username) {
  const usernameResponse = await fetch(routes.CHECKUSERNAME, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username }),
  });
  const usernameData = await usernameResponse.json();
  if (usernameData.Code == 403) {
    return false;
  }
  return true;
}