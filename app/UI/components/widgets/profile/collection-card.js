import Image from "next/image";

export const CollectionCard = ({ img, title }) => {
  return (
    <div style={{'background-color': '#020041','color':'white'}} className="shadow-lg rounded-lg p-4  flex flex-col items-center min-w-32">
      <Image src={img.src} alt={img.alt} className="w-12 h-12" />
      <span className="text-center">{title}</span>
    </div>
  );
};
