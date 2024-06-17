"use client";
import React, { useEffect, useState, useRef } from "react";
import { getMessageList, getMultipleChats } from "@/app/actions/message.action";
import LastChatMessage from "@/app/UI/components/base/chat/LastChatMessage";
import { getAuthorData } from "@/app/actions";

const AuthorChats = () => {
  const [allChats, setallChats] = useState([]);
  const [author, setAuthor] = useState();

  const hasRendered = useRef(false);
  const getChatHere = async () => {
    const ChatsList = await getMessageList();
    const chatids = ChatsList.map((element) => Number(element.ChatID));
    const fetchedChats = await getMultipleChats(chatids);
    setallChats(fetchedChats);
  };
  const getAuthorHere = async () => {
    const res = await getAuthorData();
    setAuthor(res.Data.User);
  };

  useEffect(() => {
    if (!hasRendered.current) {
      getChatHere();
      getAuthorHere();
      hasRendered.current = true;
    }
  }, []);

  return (
    allChats &&
    author && (
      <div className="mt-2">
        {allChats.map((chatArray) => {
          const chat = chatArray[0];
          const { SenderID, ReceiverID } = chat;
          let friendId;
          if (SenderID === author.id) {
            friendId = ReceiverID;
          } else {
            friendId = SenderID;
          }
          return (
            <div key={chat.id}>
              <LastChatMessage chat={chat} authorId={author.id} friendId={friendId} />
            </div>
          );
        })}
      </div>
    )
  );
};

export default AuthorChats;
