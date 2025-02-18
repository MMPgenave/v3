"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const GameNavButton = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex gap-2 rounded-full  py-2 px-5  transition-all cursor-pointer md:w-fit md:rounded-lg md:justify-center  ${pathname === href
        ? " text-gold"
        : " "
        }`}
    >
      <i className="bi bi-dice-6-fill"></i>
      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
