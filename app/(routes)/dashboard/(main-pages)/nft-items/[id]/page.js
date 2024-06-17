"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const imgUrl = "/img/img4.jpeg";
  return (
    <div className="flex flex-col items-center gap-2 mt-4  ">
      <div className="flex gap-2 items-center">
        <div>MY PIPS</div>
        <i className="bi bi-gem text-xl text-info"></i>
        <div>{0}</div>
        <div className=" bg-green-500 rounded-full size-8 flex items-center justify-center text-[30px] text-slate-100">
          +
        </div>
      </div>
      <Image src={imgUrl} width={140} height={140} alt="nft-icon" className=" rounded-full mt-4" />
      <div className=" mt-2 text-4xl font-bold text-dim-gray">{searchParams.get("name")}</div>
      <div className="px-[20px] mt-3 text-center text-slate-600 text-xl ">
        You can still use the command Emmet: Expand Abbreviation to expand your abbreviations. You can also bind any
        keyboard shortcut to the command
      </div>
      <div className="mt-2 bg-green-500 text-2xl font-bold  text-slate-100 h-12 w-full relative flex items-center justify-center ">
        BUY
        <div className=" absolute right-4 flex gap-2 items-center ">
          <div className="text-lg">{searchParams.get("price")}</div>
          <i className="bi bi-gem text-xl text-blue-200 "></i>
        </div>
      </div>
    </div>
  );
};

export default Page;
