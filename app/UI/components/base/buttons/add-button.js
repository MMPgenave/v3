"use client";
import { useState } from "react";
import { UploadImage } from "@/app/actions/uploadImage.action";
export const AddButton = ({ className }) => {
  return (
    <i
      className={`bi bi-plus text-lg cursor-pointer bg-blue-violet text-white rounded-full flex items-center  ${className}`}
    ></i>
  );
};

export const BannerAddButton = () => {
  return <AddButton className="p-1 absolute bottom-2 right-2 border-2" />;
};

export const AddImageButton = () => {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    await UploadImage(file);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="file" name="file" className=" text-slate-800" onChange={(e) => setFile(e.target.files?.[0])} />

      {file && <input type="submit" value={"Upload"} className=" text-slate-800 hover:cursor-pointer" />}
    </form>
  );
};
