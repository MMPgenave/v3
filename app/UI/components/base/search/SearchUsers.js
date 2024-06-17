"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/app/lib/utils/utils";
import { GlobalResult } from "./GlobalResult";
import OutsideClickHandler from "react-outside-click-handler";

export const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("UserName");
  const router = useRouter();
  const currentPath = usePathname();
  const [search, setSearch] = useState(query || "");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const delayDebounceFcn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "UserName",
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (query) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keys: ["UserName"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);
    return () => clearTimeout(delayDebounceFcn);
  }, [search, router, currentPath, searchParams, query]);

  useEffect(() => {
    setIsOpen(false);
    setSearch("");
  }, [currentPath]);

  return (
    <div className="relative w-full max-w-[600px] ">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image src={"/icons/search.svg"} width={24} height={24} alt="search-icon " className="cursor-pointer" />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!isOpen) {
              setIsOpen(true);
            }
            if (e.target.value === "" && isOpen) {
              setIsOpen(false);
            }
          }}
          type="text"
          placeholder="Search"
          className=" flex h-9 
           w-full rounded-md border 
            border-slate-200 bg-transparent px-3
             py-1 text-sm shadow-none
              outline-none transition-colors
                file:border-0 
               file:bg-transparent file:text-sm
                file:font-medium placeholder:text-slate-500
                 focus-visible:outline-none focus-visible:ring-slate-950 
                 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 
                 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
      </div>
      {isOpen && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false);
            setSearch("");
          }}
        >
          <GlobalResult />
        </OutsideClickHandler>
      )}
    </div>
  );
};
