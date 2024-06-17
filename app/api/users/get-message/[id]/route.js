import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req, { params }) {
  const { id } = params.id;

  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return NextResponse.json({ message: "No token found" });
  }

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.GETMESSAGE}/${params.id}`;
    const res = await fetch(url, options);
    const data = await res.json();
    return NextResponse.json({
      ...data,
    });
  } catch (error) {
    console.error(`Error is ${error}`);
    return NextResponse.json({ ...error });
  }
}
