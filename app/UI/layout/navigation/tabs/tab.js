"use client";
import { createPathSegment } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Tab = ({ children, tab }) => {
  let link = tab;
  if (tab.includes(" ")) {
    link = createPathSegment(tab);
  }
  const pathname = usePathname();
  const activeTab = pathname.split("/").indexOf(link) > 1;

  return (
    <Link
      href={link}
      className={`  font-bold text-md text-center uppercase w-full cursor-pointer  ${activeTab ? "border-b-2 border-b-gold  text-slate-200" : "text-gray"
        }`}
    >
      {children}
    </Link>
  );
};
