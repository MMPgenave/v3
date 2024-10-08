"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const GameNavButton = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex gap-2 rounded-full  py-2 px-5  transition-all cursor-pointer md:w-fit md:rounded-lg md:justify-center  ${
        pathname === href
          ? "bg-deep-sky-blue text-slate-900 scale-110 md:scale-100"
          : " hover:scale-110 bg-white text-slate-500"
      }`}
    >
      <Image
        width={24}
        height={24}
        alt="title"
        src={`/icons/custom/${pathname === href ? "GameController-On.png" : "GameController-Off.png"}`}
      />
      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
