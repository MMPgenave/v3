import Image from "next/image";

export const CollectionCard = ({ img, title }) => {
  return (
    <div className=" bg-black text-white shadow-lg rounded-lg p-4  flex flex-col gap-1 items-center min-w-32">
      <Image src={img.src} alt={img.alt} className="w-14 h-14 rounded-full" />
      <span className="text-center text-slate-300">{title}</span>
    </div>
  );
};
