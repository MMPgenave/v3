"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/UI/components/ui/button";
import Link from "next/link";
import banner from "@/app/lib/assets/img/banner.png";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs("1999-01-01").fromNow(true);
import { Banner, ProfileAvatar } from "@/app/UI/components/base";
import { AvatarContainer, ProfileBannerContainer as Container } from "@/app/UI/layout";
import { GamesHistory, HistoryCard } from "@/app/UI/components/widgets";
import gameImage from "@/app/lib/assets/img/games/backgammon.jpg";
import { getAuthorFriends } from "@/app/actions/get-friends";
import { getUserDataByUserName } from "@/app/actions/get-user-details";

import { Section } from "@/app/UI/layout";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { addToFriend } from '@/app/actions/addFriends'
const UserDetailsPage = ({ username }) => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const authorFriendsQuery = useQuery({
    queryKey: ["authorFriends"],
    queryFn: () => getAuthorFriends(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  console.log(`authorFriendsQuery.data:${JSON.stringify(authorFriendsQuery.data)}`)





  const applicationUserQuery = useQuery({
    queryKey: ["application-user"],
    queryFn: () => getUserDataByUserName(username),
    suspense: true,
    staleTime: 5 * 1000,
  });

  const userData = applicationUserQuery.data;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => addToFriend(userData.id, user.TTID, userData.TTID),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["application-user"] }),
  });

  async function addThisAppUserToAuthorFriend() {
    mutate();
  }
  let isFriend = false;
  authorFriendsQuery.data &&
    authorFriendsQuery.data.map((element) => {
      if (element.user.UserName === userData.userName) {
        isFriend = true;
      }
    });



  const userTypeStyle = clsx(
    "capitalize",
    userData.Type === "Diamond" && "text-sky-blue",
    userData.Type === "Gold" && "text-neon-carrot",
    userData.Type === "Silver" && "text-slate-400",
    userData.Type === "Bronze" && "text-firebrick"
  );






  return (
    user && (
      <Section className=" max-sm:mt-[136px] mt-[112px] pb-[70px] ">
        <div className="flex items-center justify-center relative bottom-1">
          <Image
            src="/icons/back-en.svg"
            className=" absolute left-0 text-primary invert "
            width={40}
            height={30}
            alt="back-en"
            onClick={() => router.back()}
          />

          <h2 className="text-xl text-slate-100 font-bold">Profile</h2>
        </div>
        <div className="mt-2">
          <Container>
            <Banner img={banner} />
            <AvatarContainer>
              <div className={` rounded-full flex items-center justify-center  bg-slate-300 size-[110px] `}>
                <ProfileAvatar src={userData.Avatar} />
              </div>
            </AvatarContainer>
          </Container>
        </div>

        <div className=" text-center text-primary text-2xl -mt-12">{userData.UserName}</div>
        <div className="mt-4 text-primary"> Bio {userData.Bio}</div>

        <div className="mt-4 flex items-center justify-center ">
          <div className="flex gap-4 ">
            <div className="flex flex-col  items-center">
              <div className="text-lg text-slate-100 font-bold ">{120}</div>
              <div className=" font-extralight text-primary">Level</div>
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-lg text-slate-100 font-bold ">
                <span className={userTypeStyle}>
                  <i className="bi bi-award-fill "></i>
                  {userData.Type}
                </span>
              </div>
              <div className=" font-extralight text-primary">Type</div>
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-lg text-slate-100 font-bold ">{userData.friends}</div>
              <div className=" font-extralight text-primary">Friends</div>
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-lg text-slate-100 font-bold ">{userData.friendsOf}</div>
              <div className=" font-extralight text-primary">FriendsOf</div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-6 sm-mobile:w-auto text-sm sm:text-base justify-center flex  gap-3 shadow-lg text-white font-bold">
          <div className="flex flex-col gap-1 items-center justify-center  border-secondary ">
            <h3 className="capitalize font-bold text-primary"> plays</h3>
            {userData.total_game_played}
          </div>
          <div className="capitalize flex flex-col gap-1 items-center  border-secondary px-2">
            <h3 className="capitalize font-bold text-primary"> wins</h3>
            {userData.total_game_wins}
          </div>
          <div className="capitalize flex flex-col gap-1 items-center  border-secondary px-2">
            <h3 className="capitalize font-bold text-primary">torny age</h3>
            {dayjs(userData.created_at).fromNow(true)}
          </div>
          <div className="capitalize flex flex-col gap-1 items-center   border-secondary ps-2">
            <h3 className="capitalize font-bold text-primary">rank </h3>
            {5}
          </div>
          <div className="capitalize flex flex-col gap-1 items-center  border-secondary ps-2">
            <h3 className="capitalize font-bold text-primary"> status </h3>
            {userData.Profile}
          </div>
        </div>
        <div className="mt-6 mb-3  flex items-center justify-between">
          <Button
            type={"button"}
            onClick={() => {
              addThisAppUserToAuthorFriend();
            }}
            disabled={isFriend}
            className={`w-[48%]   text-slate-100 text-sm ${isFriend ? " bg-success" : "bg-martinique"}`}
          >
            {isFriend ? "Already is Friend" : " Add to friends"}
          </Button>
          <Button className=" w-[48%] bg-primary   text-slate-50 text-sm">
            <Link href={`/dashboard/chat/:${userData.UserName}`}>Message</Link>
          </Button>
        </div>
        <GamesHistory>
          <HistoryCard img={gameImage} />
        </GamesHistory>
      </Section>
    )
  );
};

export default UserDetailsPage;
