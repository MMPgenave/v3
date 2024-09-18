"use client";
import { useState } from "react";
import { UploadImage } from "@/app/actions/uploadImage.action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const ProileChanger = () => {
  const [file, setFile] = useState();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => UploadImage(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["author"] }),
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    mutate(file);
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
