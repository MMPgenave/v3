"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { timeStampCalculator } from "@/app/lib/utils";
import { getUserDataById } from "@/app/actions/get-user-details";
import Link from "next/link";
const LastChatMessage = ({ chat, authorId, friendId }) => {
  const { Message, created_at, SenderID, ReceiverID, ChatID } = chat;
  const [friend, setFriend] = useState();
  const getFriend = async () => {
    const res = await getUserDataById(friendId);
    setFriend(res);
  };
  useEffect(() => {
    getFriend(friendId);
  }, []);
  return (
    friend && (
      <Link href={`/dashboard/chat/${friend.UserName}`} className="flex items-center justify-start gap-2  px-1 ">
        <Image
          src={friend.Avatar}
          width={50}
          height={50}
          alt="avatar"
          className=" rounded-full  border-2 border-slate-200"
        />
        <div className="flex justify-between items-center flex-1 border-b-[1px] pb-2">
          <div className="flex flex-col">
            <div className=" font-bold text-slate-200">{friend?.UserName}</div>
            <div className="text-md line-clamp-1 text-slate-300">{Message}</div>
          </div>

          <div className=" flex flex-col gap-1 items-center">
            <div className=" text-xs text-slate-300 ">{timeStampCalculator(created_at)}</div>
          </div>
        </div>
      </Link>
    )
  );
};

export default LastChatMessage;
