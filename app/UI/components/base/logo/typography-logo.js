import Image from "next/image";
import logo from "@/app/lib/assets/img/logo-typography.png";
import Link from "next/link";
import { routes } from "@/app/lib/config/routes";

export const TypographyLogo = () => {
  return (
    <Link href={routes.HOME.FEED}>
      <Image src={logo} alt="logo" className="w-28 sm:w-36" />
    </Link>
  );
};
