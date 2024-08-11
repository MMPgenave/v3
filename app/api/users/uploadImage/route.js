import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "node:fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";
export async function POST(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return NextResponse.json({ message: "No token found" });
  }
  const data = await request.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = new Uint8Array(bytes);
  await fs.writeFile(`./public/uploads/${file.name}`, buffer);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({ Avatar: `/uploads/${file.name}` }),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.CHANGE_AVATAR}`;
    const res = await fetch(url, options);
    const data = await res.json();
    const path = req.nextUrl.pathname;
    revalidatePath(path);
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
