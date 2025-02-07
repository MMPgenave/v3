"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BottomNavButton = ({ icon, href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition-all cursor-pointer flex flex-col items-center gap-1 ${pathname === href ? "text-gold hover:opacity-90" : ""
        }`}
    >
      <i className={`bi bi-${icon}`}></i>

      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
