import Image from "next/image";

export const ShopItem = ({ img, price }) => {
  return (
    <div style={{ 'background-color': '#020041' }} className=" p-6 rounded-lg flex flex-col gap-2 items-center">
      <Image src={img.src} alt={img.alt} className="rounded-lg w-16 h-16" />
      <div className="flex flex-col items-center">
        <span> {img.alt}</span>

        <div className="flex gap-2 items-center justify-center">
          {img.id % 2 === 0 && <i className="bi bi-gem text-lg text-info"></i>}
          {img.id % 2 !== 0 && (
            <i className="bi bi-coin text-lg text-neon-carrot"></i>
          )}
          {price}
        </div>
      </div>
    </div>
  );
};
