// "use server";
import { routes } from "@/app/lib/config/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export async function changeUsernameAction(name) {
  console.log(`name in action:${name}`);
  try {
    const res = await fetch(routes.CHANGE_USERNAME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: name,
      }),
    });
    const data = await res.json();
    if (res.statusCode === 422) {
      toast.error(` ${data.message}`);
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      toast.error(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      toast.success(" Successfully username changed.");
      return;
    }
  } catch (error) {
    console.error(error);
  }
}
