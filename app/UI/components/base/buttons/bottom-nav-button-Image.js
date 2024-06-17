"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BottomNavButtonImage = ({ icon, href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`transition-all cursor-pointer hover:text-white flex flex-col items-center gap-2 `}
    >
      <img style={ { width:'24px' } } src={`/icons/custom/${pathname === href ? icon + "-Off.png" : icon +"-On.png"}` } />
      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
