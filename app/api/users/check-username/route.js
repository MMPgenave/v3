import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";

export async function POST(req) {
  // const { username } = req.body;
  const data = await req.json();
  const { username } = data;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ UserName: username }),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.CHECKUSERNAME}`;
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
