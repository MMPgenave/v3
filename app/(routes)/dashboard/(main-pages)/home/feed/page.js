import { Socket } from "@/app/UI/components/base";
import { DailyMission, GameFeed, OnlineFavorites } from "@/app/UI/components/widgets";

import AuthorChats from "@/app/UI/components/base/chat/AuthorChats";

const Feed = () => {
  return (
    <div className="relative">
      <Socket />
      <OnlineFavorites />
      <DailyMission />
      <GameFeed />
      <AuthorChats />
    </div>
  );
};

export default Feed;
