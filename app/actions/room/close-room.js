import { routes } from "@/app/lib/config/routes";

export async function closeRoom(RoomID, Winner, Loser) {
  try {
    const res = await fetch(routes.CLOSE_ROOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RoomID,
        Winner,
        Loser,
      }),
    });
    const data = await res.json();
    // console.log(`In close-room action res:${JSON.stringify(data)}`);
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
