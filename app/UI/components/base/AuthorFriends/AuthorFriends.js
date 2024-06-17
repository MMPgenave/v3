"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAuthorFriends } from "@/app/actions/get-friends";

export const AuthorFriends = () => {
  const [userFriends, setuserFriends] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await getAuthorFriends();
      setuserFriends(res);
    }
    getData();
  }, []);
  return (
    <div className=" p-2">
      <div className="mt-3 ml-2 flex flex-col gap-3">
        {userFriends.length > 0 ? (
          userFriends.map((element) => {
            return (
              <Link
                href={`/dashboard/chat/${element.user.UserName}`}
                key={element.user.TTID}
                className="flex items-center gap-2"
              >
                <Image
                  src={element.user.Avatar}
                  width={50}
                  className=" rounded-full"
                  height={50}
                  alt={element.user.UserName}
                />
                <div>{element.user.UserName}</div>
              </Link>
            );
          })
        ) : (
          <div>No Friends Yet!</div>
        )}
      </div>
    </div>
  );
};
