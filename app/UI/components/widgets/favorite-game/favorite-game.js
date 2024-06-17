import Link from "next/link";
import { HomePageGameImage } from "../../base";

export const FavoriteGame = ({ img, href }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={href}>
        <HomePageGameImage img={img} />
      </Link>
        <span className="text-sm">{img.alt}</span>
    </div>
  );
};
