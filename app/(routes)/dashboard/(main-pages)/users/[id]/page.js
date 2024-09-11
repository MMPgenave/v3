"use client";
import UserDetailsPage from "@/app/UI/components/base/UserDetailsPage/UserDetailsPage";
import { useState, useEffect } from "react";
import { getUserDataByUserName } from "@/app/actions/get-user-details";
import { getAuthorFriends } from "@/app/actions/get-friends";
const Page = ({ params: { id } }) => {
  const userName = id;
  const [userDetails, setuserDetails] = useState();
  const [authorFriendsList, setauthorFriendsList] = useState([]);

  useEffect(() => {
    async function catchUserData(username) {
      const data = await getUserDataByUserName(username);
      const Friends = await getAuthorFriends();
      setuserDetails(data);
      setauthorFriendsList(Friends);
    }
    catchUserData(userName);
  }, []);

  let isFriend = false;

  authorFriendsList &&
    authorFriendsList.map((element) => {
      if (element.user.UserName === userName) {
        isFriend = true;
      }
    });

  console.log(`user details:${JSON.stringify(userDetails)}`);

  return (
    userDetails && (
      <UserDetailsPage
        userData={{
          UserName: userDetails.UserName,
          email: userDetails.email,
          Avatar: userDetails.Avatar,
          id: userDetails.id,
          TTID: userDetails.TTID,
          friends: "fetched",
          friendsOf: "fetched",
          isFriend: isFriend,
          total_game_played: userDetails.total_game_played,
          total_game_wins: userDetails.total_game_wins,
          created_at: userDetails.created_at,
          Type: userDetails.Type,
          Bio: userDetails.Bio,
          Profile: userDetails.Profile,
        }}
      />
    )
  );
};

export default Page;
