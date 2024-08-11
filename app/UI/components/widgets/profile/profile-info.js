"use client";
import { useState } from "react";
import { CoinBox } from "@/app/UI/components/widgets";
import { useAppSelector } from "@/app/lib/redux/hooks";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect } from "react";
dayjs.extend(relativeTime);
dayjs("1999-01-01").fromNow(true);
import { routes } from "@/app/lib/config/routes";
import Link from "next/link";
import { getAuthorFriends } from "@/app/actions/get-friends";

export const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [userFriends, setuserFriends] = useState([]);
  const [userFriendsOf, setuserFriendsOf] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getAuthorFriends();
      setuserFriends(res);
    }
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
        console.log(`Error in getUserFriendsOf is:${error}`);
      }
    }

    getData();
    getUserFriendsOf();
  }, []);

  const userTypeStyle = clsx(
    "capitalize",
    user.Type === "Diamond" && "text-sky-blue",
    user.Type === "Gold" && "text-neon-carrot",
    user.Type === "Silver" && "text-slate-400",
    user.Type === "Bronze" && "text-firebrick"
  );
  return (
    <>
      <div className="w-4/5 sm-mobile:w-auto bg-black text-sm sm:text-base flex flex-col sm-mobile:flex-row gap-1 shadow-lg justify-center p-2 rounded-lg text-white font-bold">
        <div className="flex flex-col items-center sm-mobile:border-r-2 border-secondary pe-2">
          <h3 className="capitalize font-bold text-primary">total games</h3>
          {user.total_game_played}
        </div>
        <div className="capitalize flex flex-col items-center sm-mobile:border-r-2 border-secondary pe-2">
          <h3 className="capitalize font-bold text-primary">wins</h3>
          {user.total_game_wins}
        </div>
        <div className="capitalize flex flex-col items-center sm-mobile:border-r-2 border-secondary pe-2">
          <h3 className="capitalize font-bold text-primary">torny age</h3>
          {dayjs(user.created_at).fromNow(true)}
        </div>
        <div className="capitalize flex flex-col items-center sm-mobile:border-r-2 border-secondary pe-2">
          <h3 className="capitalize font-bold text-primary">user type</h3>
          <span className={userTypeStyle}>
            <i className="bi bi-award-fill "></i>
            {user.Type}
          </span>
        </div>
        <div className="capitalize flex flex-col items-center">
          <h3 className="capitalize font-bold text-primary">friends</h3>
          <Link
            href={{
              pathname: "/dashboard/people/friends",
            }}
          >
            {userFriends.length}
          </Link>
        </div>
        <div className="flex flex-col items-center sm-mobile:border-l-2 border-secondary pe-2 pl-1">
          <h3 className="capitalize font-bold text-primary">friendsOf </h3>
          <Link href={"/dashboard/people/friends-of"}>{userFriendsOf.length}</Link>
        </div>
      </div>
      <CoinBox />
    </>
  );
};
