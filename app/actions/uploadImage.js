import { revalidatePath } from "next/cache";
import { routes } from "../lib/config/routes";
export async function UploadImage(file) {
  try {
    console.log("in function");
    const data = new FormData();
    data.set("file", file);
    const res = await fetch(routes.UPLOAD_IMAGE, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      toast.error("Avatar changes failed.");

      throw new Error(await res.text());
    }
    revalidatePath("/", "layout");

    toast.success("Avatar changed successfully.");
  } catch (error) {
    console.error(error);
  }
}
