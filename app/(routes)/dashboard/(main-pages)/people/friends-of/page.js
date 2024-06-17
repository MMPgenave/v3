"use client";
import { useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
import { routes } from "@/app/lib/config/routes";
import Image from "next/image";
const FriendsOf = () => {
  const [userFriendsOf, setuserFriendsOf] = useState([]);
  // console.log(`frindsOf is :${JSON.stringify(userFriendsOf)}`);

  useEffect(() => {
    async function getUserFriendsOf() {
      try {
        const response = await fetch(`${routes.GETUSERFRIENDOF}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setuserFriendsOf(data.Data[0]);
      } catch (error) {
        console.log(`Error in getAuthorFriends is:${error}`);
      }
    }

    getUserFriendsOf();
  }, []);
  return (
    <div className="relative ">
      <div className=" p-2">
        <div className="mt-3 ml-2 flex flex-col gap-4">
          {userFriendsOf.length > 0
            ? userFriendsOf.map((element) => {
                return (
                  <div key={element.friend.TTID} className="flex items-center gap-2">
                    <Image
                      src={element.friend.Avatar}
                      width={50}
                      className=" rounded-full"
                      height={50}
                      alt={element.friend.UserName}
                    />
                    <div>{element.friend.UserName}</div>
                  </div>
                );
              })
            : "No Friends-Of yet."}
        </div>
      </div>
    </div>
  );
};

export default FriendsOf;
