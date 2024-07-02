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

    // sort fetchedChats based on newest message the all users send to this author
    fetchedChats.sort((chat1, chat2) => {
      const timeObj_chat1 = new Date(chat1[0].created_at);
      const timeObj_chat2 = new Date(chat2[0].created_at);
      return timeObj_chat2.getTime() - timeObj_chat1.getTime();
    });
    console.log(`${[1, 22, 3, 45].sort((a, b) => b - a)}`);

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
      <div className="mt-3 flex flex-col gap-3">
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
