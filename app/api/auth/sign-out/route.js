import { NextResponse } from "next/server";
import { APIRoutes, routes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.LOGOUT}`;
    const res = await fetch(url, options);
    const data = await res.json();
    cookieStore.delete("token");
    cookieStore.delete("session");
    return NextResponse.redirect(`${process.env.BASE_URL}${routes.AUTH}`);
  } catch (error) {
    cookieStore.delete("token");
    cookieStore.delete("session");
    return NextResponse.redirect(`${process.env.BASE_URL}${routes.AUTH}`);
  }
}
