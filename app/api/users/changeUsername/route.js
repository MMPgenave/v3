import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return NextResponse.json({ message: "No token found" });
  }
  const data = await req.json();
  const { UserName } = data;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({ UserName }),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.CHANGE_USERNAME}`;
    const res = await fetch(url, options);
    const data = await res.json();
    revalidatePath("/", "layout");
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
