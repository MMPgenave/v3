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
import { useAppSelector } from "@/app/lib/redux/hooks";
import { collectibles } from "@/app/lib/data/images";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Section>
      <ProfileBanner />
      <ProfileInfo />
      <div  className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-4 w-full gap-2">
          <ProfileField title="FirstName">
              {user.FirstName ? `${user.FirstName}` : "Your First Name Goes Here"}
          </ProfileField>
          <ProfileField title="LastName">
              {user.LastName ? `${user.LastName}` : "Your Last Name Goes Here"}
          </ProfileField>
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
