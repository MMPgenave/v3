"use client";
import { ProfileField } from "@/app/UI/components/base";
import {
  CollectionCard,
  GamesHistory,
  HistoryCard,
  ProfileBanner,
  ProfileInfo,
  UserCollection,
} from "@/app/UI/components/widgets";
import gameImage from "@/app/lib/assets/img/games/backgammon.jpg";
import { ProfileSection as Section } from "@/app/UI/layout";
import { collectibles } from "@/app/lib/data/images";
import { useQuery } from "@tanstack/react-query";
import { getAuthorData } from "@/app/actions/get-author-data";

const Profile = () => {
  const userQuery = useQuery({
    queryKey: ["author"],
    queryFn: () => getAuthorData(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  const user = userQuery.data.Data.User;
  return (
    <Section className=" max-sm:mt-[136px] mt-[112px] max-sm:pb-[70px]">
      <ProfileBanner />
      <ProfileInfo />
      <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-4 w-full gap-2">
        <ProfileField title="FirstName">
          {user.FirstName ? `${user.FirstName}` : "Your First Name Goes Here"}
        </ProfileField>
        <ProfileField title="LastName">{user.LastName ? `${user.LastName}` : "Your Last Name Goes Here"}</ProfileField>
        <ProfileField title="bio" className="md:row-start-2 row-end-6">
          {user.Bio ? `${user.Bio}` : "Your Bio Goes Here"}
        </ProfileField>
        <UserCollection>
          {collectibles.length
            ? collectibles.map((collectible) => (
                <CollectionCard key={collectible.id} img={collectible} title={collectible.alt} />
              ))
            : "You have no collectibles :("}
        </UserCollection>
      </div>
      <GamesHistory>
        <HistoryCard img={gameImage} />
      </GamesHistory>
    </Section>
  );
};

export default Profile;
