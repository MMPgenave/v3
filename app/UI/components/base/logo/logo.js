import Image from "next/image";
import logo from "@/app/lib/assets/img/logo.png";

export const Logo = () => {
  return <Image src={logo} alt="logo" className="w-3/4 max-w-lg" priority />;
};
