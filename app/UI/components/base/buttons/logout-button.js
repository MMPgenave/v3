"use client";
import { signOut } from "@/app/actions/sign-out";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const LogoutButton = () => {
  const path = usePathname();
  const router = useRouter();

  // To be implemented later
  return (
    <i
      onClick={() => {
        signOut();
        router.push("/auth/login");
      }}
      className="bi bi-box-arrow-right text-2xl text-white cursor-pointer hover:scale-150 transition-all hover:text-danger"
    ></i>
  );
};
