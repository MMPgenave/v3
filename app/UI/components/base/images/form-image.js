import { randomPhotoGenerator } from "@/app/lib/utils";
import Image from "next/image";

export const FormImage = () => {
  const wallpaper = randomPhotoGenerator(0, 14, "landscape");
  return (
    <Image
      src={wallpaper.src}
      alt={wallpaper.alt}
      className="hidden top-0 h-full sm:block lg:fixed lg:opacity-90"
    />
  );
};
