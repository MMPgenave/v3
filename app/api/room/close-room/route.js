import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return NextResponse.json({ message: "No token found" });
  }
  const data = await req.json();
  const { RoomID, Winner, Loser } = data;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({ RoomID, Winner, Loser }),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.CLOSE_ROOM}`;
    const res = await fetch(url, options);
    const data = await res.json();
    return NextResponse.json({
      ...data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error: error.message,
      status: error.status,
    });
  }
}