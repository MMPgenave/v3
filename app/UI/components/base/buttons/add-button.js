"use client";

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
