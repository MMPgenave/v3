"use server";
import { routes } from "@/app/lib/config/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
export async function changeUsernameAction(name) {
  console.log("action");
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  console.log("token =", token);
  try {
    const res = await fetch(`http://127.0.0.1:8000${routes.CHANGE_USERNAME}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        UserName: name,
      }),
    });
    const data = await res.json();
    console.log(`in server action data is :${JSON.stringify(data)}`);
    if (res.statusCode === 422) {
      //   toast.error(` ${data.message}`);
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      //   toast.error(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      //   toast.success(" Successfully username changed.");
      return;
    }
  } catch (error) {
    console.error("fucking error is \n", error);
  }
}
