import { NextResponse } from "next/server";
import { APIRoutes } from "@/app/lib/config/routes";
import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;
  const user = {
    email: email,
    password: password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const url = `${process.env.API_URL}${APIRoutes.LOGIN}`;
    const res = await fetch(url, options);
    const data = await res.json();

    if (data.Status === "success") {
      const refreshTokenUrl = `${process.env.API_URL}${APIRoutes.REFRESH}`;
      const refreshTokenOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${data.Data.Token}`,
        },
      };
      const refreshResponse = await fetch(refreshTokenUrl, refreshTokenOptions);
      const refreshData = await refreshResponse.json();

      cookies().set("token", refreshData.Data.Token);
      cookies().set("session", true);
    }
    return NextResponse.json({
      ...data,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error",
      error: error.message,
      status: 500,
    });
  }
}
