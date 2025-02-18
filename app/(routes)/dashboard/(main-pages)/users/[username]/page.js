"use client";
import UserDetailsPage from "@/app/UI/components/base/UserDetailsPage/UserDetailsPage";
import { useState, useEffect } from "react";
import { getUserDataByUserName } from "@/app/actions/get-user-details";
import { getAuthorFriends } from "@/app/actions/get-friends";

const Page = ({ params: { username } }) => {

  const [userDetails, setuserDetails] = useState();
  const [authorFriendsList, setauthorFriendsList] = useState([]);



  useEffect(() => {
    async function catchUserData(username) {
      const data = await getUserDataByUserName(username);
      const Friends = await getAuthorFriends();
      setuserDetails(data);
      setauthorFriendsList(Friends);
    }
    catchUserData(username);
  }, []);


  // console.log(`user details:${JSON.stringify(userDetails)}`);

  return (

    <UserDetailsPage
      username={username}
    />

  );
};

export default Page;
