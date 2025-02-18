import { routes } from "@/app/lib/config/routes";

export async function createRoom(Players, GameName, Bet) {
  try {
    const res = await fetch(routes.CREATE_ROOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Players,
        GameName,
        Bet,
      }),
    });
    const data = await res.json();
    // console.log(`In create-room action res:${JSON.stringify(data)}`);
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
      return data;
    }
  } catch (error) {
    console.log("error in Sign Up", error);
  }
}
