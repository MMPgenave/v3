"use client";
import { createTitleFromPathname } from "@/app/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { HeartButton } from "../../components/base";
export const HeaderNav = ({ heart, className }) => {
  const pathname = usePathname();
  const router = useRouter();
  const title = createTitleFromPathname(pathname);

  return (
    <div className={`w-full border-b border-b-secondary ${className}`}>
      <div className="flex justify-between items-center p-2">
        <i
          className="bi bi-chevron-left cursor-pointer text-2xl"
          onClick={() => router.back()}
        ></i>
        <span className="capitalize text-blue-violet font-bold m-auto">
          {title}
        </span>
        {heart && <HeartButton />}
      </div>
    </div>
  );
};
