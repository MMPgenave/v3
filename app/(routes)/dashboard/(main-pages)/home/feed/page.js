import { Socket } from "@/app/UI/components/base";
import { DailyMission, GameFeed, OnlineFavorites } from "@/app/UI/components/widgets";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import Image from "next/image";
import AuthorChats from "@/app/UI/components/base/chat/AuthorChats";

const Feed = () => {
  return (
    <div className="relative">
      <Socket />
      <OnlineFavorites />
      <DailyMission />
      <GameFeed />
      <AuthorChats />
      <Link
        href={"/dashboard/people/friends"}
        className="absolute bottom-0 -z-1 right-1 bg-transparent rounded-full w-12 h-12"
      >
        <Fab color="#fff" aria-label="edit">
          <Image src="/icons/icons8-chat.gif" width={55} height={55} alt="chat" className="rounded-full" />
        </Fab>
      </Link>
    </div>
  );
};

export default Feed;
