"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const GameNavButton = ({ href, title }) => {
  const pathname = usePathname();
  return (
      <Link
          href={href}
          className={`flex gap-2 rounded-full md:rounded-none py-2 px-5  transition-all cursor-pointer md:w-full md:justify-center  ${
              pathname === href
                  ? "bg-deep-sky-blue text-blue-violet scale-110 md:scale-100"
                  : " hover:scale-110 bg-white text-secondary"
          }`}
      >
        <img style={ { width:'24px' } } src={`/icons/custom/${pathname === href ? "GameController-On.png" :  "GameController-Off.png"}`}/>
        <span className="hidden md:inline capitalize">{title}</span>
      </Link>
  );
};
