import { NextResponse } from "next/server";
import { APIRoutes } from "@/app/lib/config/routes";

export async function POST(req) {
  console.log(`endpoint:${process.env.API_URL}`);
  const body = await req.json();
  const { username, email, password, referralID } = body;
  const newUser = {
    UserName: username,
    email: email,
    password: password,
    ReferralID: referralID,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser),
  };
  try {
    const url = `https://torny-town-api.vercel.app${APIRoutes.REGISTER}`;
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
