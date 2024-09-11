"use client";
import { useState } from "react";
import { UploadImage } from "@/app/actions/uploadImage.action";

export const ProileChanger = () => {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    await UploadImage(file);
  };
  return (
    <form onSubmit={onSubmit} className=" mt-4 mx-auto ">
      <input
        type="file"
        name="file"
        accept="image/*"
        className="block w-full  text-slate-600 file: mr-4 file:py-1 file:px-2
        file: rounded-full file:border-0 file:text-xs file: bg-gray-700 file:text-sky-600
        hover:file:bg-gray-600"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      {file && <input type="submit" value={"Upload"} className=" text-slate-800 hover:cursor-pointer" />}
    </form>
  );
};
