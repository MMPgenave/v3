import backgammon from "@/app/lib/assets/img/games/backgammon-wallpaper.jpeg";
import Image from "next/image";
import Link from "next/link";
import { GamesSection as Section } from "@/app/UI/layout";
import { routes } from "@/app/lib/config/routes";
const Games = () => {
  return (
    <Section>
      <Link
        href={routes.GAMESLIST.BACKGAMMON}
        className="relative rounded-lg cursor-pointer "
      >
        <Image
          className="md:w-full rounded-lg "
          src={backgammon}
          alt="backgammon"
        />
        <h2 className="flex items-center justify-center absolute w-full h-full top-0 bottom-0 text-4xl font-bold text-secondary bg-[rgba(22,21,56,0.8)] hover:bg-[rgba(22,21,56,0.7)] transition-all hover:text-5xl rounded-lg">
          <span className="p-2">Backgammon</span>
        </h2>
      </Link>
      <Link
        href={routes.GAMESLIST.BACKGAMMON}
        className="relative rounded-lg cursor-pointer "
      >
        <Image
          className="md:w-full rounded-lg "
          src={backgammon}
          alt="backgammon"
        />
        <h2 className="flex items-center justify-center absolute w-full h-full top-0 bottom-0 text-4xl font-bold text-secondary bg-[rgba(22,21,56,0.8)] hover:bg-[rgba(22,21,56,0.7)] transition-all hover:text-5xl rounded-lg">
          <span className="p-2">Backgammon</span>
        </h2>
      </Link>
    </Section>
  );
};

export default Games;
