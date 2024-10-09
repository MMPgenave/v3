"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAuthorData } from "@/app/actions/get-author-data";

const BottomProfileButton = ({ href, title }) => {
  const path = usePathname();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["author"],
    queryFn: () => getAuthorData(),
  });

  if (isPending)
    return (
      <div>
        <Image
          src="/images/unknown-user.png"
          width={44}
          height={44}
          alt="avatar"
          className={`w-10 h-10 rounded-full  cursor-pointer border-2`}
        />
        <span className="hidden md:inline capitalize">{title}</span>
      </div>
    );
  if (error) return <div className=" text-sm font-bold text-red-400">Error</div>;

  const user = data.Data.User;

  return (
    <Link
      href={href}
      className={`transition-all cursor-pointer hover:text-white flex flex-col items-center gap-2 ${
        path === href ? "text-info hover:text-info" : ""
      }`}
    >
      <Image
        src={user.Avatar}
        width={44}
        height={44}
        alt="avatar"
        className={`w-10 h-10 rounded-full  cursor-pointer border-2 ${path === href && "border-info"}`}
      />
      <span className="hidden md:inline capitalize">{title}</span>
    </Link>
  );
};

export default BottomProfileButton;
