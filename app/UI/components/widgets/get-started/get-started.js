import { randomPhotoGenerator } from "@/app/lib/utils";
import Image from "next/image";
import img4 from "@/app/lib/assets/img/portraits/img4.jpeg";
import { Button } from "../../base";
import Link from "next/link";
import { routes } from "@/app/lib/config/routes";

export const GetStarted = () => {
  const wallpaper = randomPhotoGenerator(0, 8, "portrait");
  return (
    <section className="flex justify-center items-center relative h-screen">
      <div className="w-1/2 xl:w-1/3  relative">
        <Image
          className="hidden sm:block sm:rounded-lg md:rounded-lg"
          src={wallpaper.src}
          alt={wallpaper.alt}
        />
        <Link
          href={routes.AUTH}
          className="hidden sm:block absolute bottom-0 left-0 z-50 w-full "
        >
          <Button mode="success" size="lg" square additionalStyles="w-full">
            Get Started
          </Button>
        </Link>
      </div>

      <Image
        className="w-full md:w-auto h-full object-cover sm:rounded-lg sm:p-12 sm:hidden"
        src={img4}
        alt="tornytown-kingdom"
      />
      <Link
        href={routes.AUTH}
        className="absolute z-50 bottom-0 w-full sm:hidden"
      >
        <Button mode="success" size="lg" square additionalStyles="w-full">
          Get Started
        </Button>
      </Link>
    </section>
  );
};
