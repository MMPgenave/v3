import { NextResponse } from "next/server";
import { APIRoutes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.REFRESH}`;
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.Message === "The token has been blacklisted") {
      return NextResponse.json({
        message: "error",
        error: "The token has been blacklisted",
        status: 401,
      });
    }
    cookies().set("token", data.Data.Token);
    return NextResponse.json({
      ...data,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error occurred",
      status: 401,
    });
  }
}
