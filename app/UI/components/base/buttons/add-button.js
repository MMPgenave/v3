"use client";
import { useState } from "react";
import { UploadImage } from "@/app/actions/uploadImage";
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
    <div className="flex flex-col items-center justify-center ">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
        />

        {file && (
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Upload
          </button>
        )}
      </form>
    </div>
  );
};
