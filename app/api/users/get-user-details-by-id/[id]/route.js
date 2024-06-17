import { APIRoutes } from "@/app/lib/config/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, { params }) {
  const { id } = params.id;
  // console.log(`params in POST:${params.id}`);
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return NextResponse.json({ message: "No token found" });
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({ UserName: "adminsys" }),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.GET_USER_DETAILS}/${params.id}`;
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
