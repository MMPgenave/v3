"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/app/lib/redux/hooks";

export const BottomNavButton = ({ icon, href, title }) => {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Link
      href={href}
      className={`transition-all cursor-pointer hover:text-white flex flex-col items-center gap-2 ${
        pathname === href ? "text-info hover:text-info" : ""
      }`}
    >
      {icon === "person-circle" && user ? (
        <Image
          src={user.Avatar}
          width={44}
          height={44}
          alt="avatar"
          className={`w-10 h-10 rounded-full  cursor-pointer border-2 ${pathname === href && "border-info"}`}
        />
      ) : (
        <i className={`bi bi-${icon}`}></i>
      )}
      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};
