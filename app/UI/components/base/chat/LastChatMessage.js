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
      <Link
        href={`/dashboard/chat/${friend.UserName}`}
        className="flex items-center justify-between gap-5 py-2 px-3 border-b-[1px]"
      >
        <div className="flex gap-3 items-center">
          <Image src={friend.Avatar} width={50} height={50} alt="avatar" className=" rounded-full " />
          <div className="flex flex-col">
            <div>{friend?.UserName}</div>
            <div className="text-md line-clamp-1 text-secondary">{Message}</div>
          </div>
        </div>
        <div className=" flex flex-col gap-1 items-center">
          <div className=" text-xs ">{timeStampCalculator(created_at)}</div>
          <div className=" size-6 rounded-full bg-slate-200 text-xs flex justify-center items-center text-primary">
            {12}
          </div>
        </div>
      </Link>
    )
  );
};

export default LastChatMessage;
