"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BottomNavButton = ({ icon, href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition-all cursor-pointer hover:text-white flex flex-col items-center gap-2 ${
        pathname === href ? "text-info hover:text-info" : ""
      }`}
    >
      <i className={`bi bi-${icon}`}></i>

      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
