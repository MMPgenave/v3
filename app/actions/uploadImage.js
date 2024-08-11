import { revalidatePath } from "next/cache";

export async function UploadImage(file) {
  try {
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
