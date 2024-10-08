import { OnlineFriendAvatar } from "../../base";
import { FavoriteGame } from "../favorite-game";
import game1 from "@/app/lib/assets/img/games/backgammon.jpg";

export const OnlineFavorites = () => {
  const gameImage = { id: 1, src: game1, alt: "backgammon" };
  return (
    <div className="flex flex-col  p-4 w-full shadow-md gap-4 border-b-[0.5px] border-slate-400 bg-black">
      <h2 className="uppercase">online/favorites</h2>
      <div className="flex gap-4 overflow-auto">
        <OnlineFriendAvatar href="/dashboard/people/friends" src="/icons/add-friends-7.svg" name="Add Friends" />
        <OnlineFriendAvatar href="#" src="/img/img1.jpeg" />
        <FavoriteGame href="#" img={gameImage} />
      </div>
    </div>
  );
};
