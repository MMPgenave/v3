"use client";
import { CoinBox } from "@/app/UI/components/widgets";
import { useAppSelector } from "@/app/lib/redux/hooks";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs("1999-01-01").fromNow(true);
import Link from "next/link";
import { getAuthorFriends } from "@/app/actions/get-friends";
import { getUserFriendsOf } from '@/app/actions/get-friends-of'
import { useQuery } from "@tanstack/react-query";

export const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(`user kaivan:${JSON.stringify(user, null, 2)}`)
  const userFriendsQuery = useQuery({
    queryKey: ["userFriends"],
    queryFn: getAuthorFriends,
    suspense: true,
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });
  // console.log(`userFriendsQuery:${JSON.stringify(userFriendsQuery.data)}`)
  const userFriendsOfQuery = useQuery({
    queryKey: ["userFriendsOf"],
    queryFn: getUserFriendsOf,
    suspense: true,
    staleTime: 5 * 1000,
    refetchOnWindowFocus: false, // Disable refetch on window focus

  });
  // console.log(`userFriendsOfQuery:${JSON.stringify(userFriendsOfQuery.data)}`)

  if (userFriendsOfQuery.isPending || userFriendsQuery.isPending) {
    return <div>Loading...</div>
  }
  if (userFriendsOfQuery.isError || userFriendsQuery.isError) {
    return <div className=" text-red-500">{userFriendsOfQuery.error.message + userFriendsQuery.error.message}</div>
  }

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
              {userFriendsQuery.data.length}
            </Link>
          </div>
          <div className="flex flex-col items-center   pl-1">
            <h3 className="capitalize font-bold text-primary">friendsOf </h3>
            <Link className=" text-slate-200" href={"/dashboard/people/friends-of"}>
              {userFriendsOfQuery.data.length}
            </Link>
          </div>
        </div>
      </div>
      <CoinBox />
    </>
  );
};
