import Image from "next/image";

export const GameImage = ({ img, className, width, height }) => {
  return <Image className={`rounded-full ${className}`} src={img.src} alt={img.alt} width={width} height={height} />;
};

export const HistoryCardImage = ({ img }) => {
  return <GameImage width="96" height="96" className="w-24" img={img} />;
};

export const HomePageGameImage = ({ img }) => {
  return <GameImage width={80} height={80} img={img} />;
};
