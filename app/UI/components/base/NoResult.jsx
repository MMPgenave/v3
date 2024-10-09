/* eslint-disable camelcase */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoResult = ({ title, button_content, button_href, description }) => {
  return (
    <div className="  flex flex-col items-center gap-3 px-[100px] max-sm:px-1 ">
      <Image src={"/images/dark-illustration.png"} width={150} height={100} alt="dark-illustration" />
      <h1 className=" text-2xl text-slate-200 max-sm:text-lg text-center ">{title}</h1>
      <p className=" text-slate-200 text-center max-sm:text-sm">{description}</p>
      <Link
        href={button_href}
        className="bg-info max-sm:text-sm   text-lg text-slate-900 rounded-md px-4 py-3 hover:opacity-90"
      >
        {button_content}
      </Link>
    </div>
  );
};

export default NoResult;
