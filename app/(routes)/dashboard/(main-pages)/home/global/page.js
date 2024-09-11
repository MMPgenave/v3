import React from "react";
import { Search } from "@/app/UI/components/base/search/SearchUsers.js";

const Global = () => {
  return (
    <div className=" flex flex-col justify-center items-center  mt-4 ">
      <h3 className=" mb-2 text-slate-200 text-xl">Search in all user that uses this application</h3>
      <Search />
    </div>
  );
};

export default Global;
