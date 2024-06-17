import Image from "next/image";

export const Banner = ({ img }) => {
  return <Image src={img} alt="banner" className="w-full h-32" priority />;
};
