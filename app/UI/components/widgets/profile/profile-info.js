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
      <div className="w-4/5 sm-mobile:w-auto py-4 px-8 bg-black text-lg flex flex-col sm:flex-row sm:gap-6 gap-4 shadow-lg justify-center rounded-lg text-white font-bold">
        <div className=" flex items-center gap-6 ">
          <div className="flex flex-col items-center  ">
            <h3 className="capitalize font-bold text-primary">total games</h3>
            <div className=" text-slate-200"> {user.total_game_played}</div>
          </div>
          <div className="capitalize flex flex-col items-center  ">
            <h3 className="capitalize font-bold text-primary">wins</h3>
            <div className=" text-slate-200"> {user.total_game_wins}</div>
          </div>
          <div className="capitalize flex flex-col items-center  ">
            <h3 className="capitalize font-bold text-primary">torny age</h3>
            <div className=" text-slate-200"> {dayjs(user.created_at).fromNow(true)}</div>
          </div>
        </div>
        <div className=" flex items-center gap-6 ">
          <div className="capitalize flex flex-col items-center  ">
            <h3 className="capitalize font-bold text-primary">user type</h3>
            <span className={userTypeStyle}>
              <i className="bi bi-award-fill "></i>
              {user.Type}
            </span>
          </div>
          <div className="capitalize flex flex-col items-center">
            <h3 className="capitalize font-bold text-primary">friends</h3>
            <Link href={"/dashboard/people/friends"} className=" text-slate-200">
              {userFriends.length}
            </Link>
          </div>
          <div className="flex flex-col items-center   pl-1">
            <h3 className="capitalize font-bold text-primary">friendsOf </h3>
            <Link className=" text-slate-200" href={"/dashboard/people/friends-of"}>
              {userFriendsOf.length}
            </Link>
          </div>
        </div>
      </div>
      <CoinBox />
    </>
  );
};
