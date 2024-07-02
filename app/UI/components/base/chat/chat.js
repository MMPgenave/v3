"use client";
import { useState, useEffect, useRef } from "react";
import "./chat.css";
import Image from "next/image";
import { timeStampCalculator } from "@/app/lib/utils";
import { postMessage, getMessageList, getMultipleChats } from "@/app/actions/message.action";
import { getAuthorData } from "@/app/actions";
import { findUserBYUserName } from "@/app/actions/findUserBYUserName.action";
import { Knock } from "@knocklabs/node";
import { Section } from "@/app/UI/layout";
import { useSocketOn, socketEmit } from "@/app/lib/hooks/hooks";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { startRoom } from "@/app/actions";
import { setFailedToJoin, setJoinName, setShouldRedirectTo } from "@/app/lib/redux/features/room/room-slice";
import { toast } from "react-toastify";
const KnockClient = new Knock("sk_test_amLsV98Sm_1FWsTVA--BKZYSMp0i2D9E7E3-S2AkC9Y");

export const ChatWithOthers = ({ friendUserName }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [user, setuser] = useState();
  const [friend, setfriendDetails] = useState();
  const [allChats, setallChats] = useState([]);
  const dummy = useRef(null);

  const dispatch = useAppDispatch();

  const handleSetJoinName = (name) => {
    dispatch(setJoinName(name));
  };

  const handleSetFailedToJoin = (value) => {
    dispatch(setFailedToJoin(value));
  };
  const handleSetShouldRedirectTo = (value) => {
    dispatch(setShouldRedirectTo(value));
  };

  // get user
  const getUsers = async () => {
    const [res, res2] = await Promise.all([getAuthorData(), findUserBYUserName(friendUserName)]);
    setfriendDetails(res2);
    setuser(res.Data.User);
  };

  const getChatHere = async () => {
    const ChatsList = await getMessageList();
    const chatids = ChatsList.map((element) => Number(element.ChatID));
    const fetchedChats = await getMultipleChats(chatids);
    setallChats(fetchedChats);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    getUsers();
    getChatHere();
  }, []);

  const chatsBetweenAuthorAndFriend = [];
  if (allChats && user && friend) {
    allChats.forEach((chatArray) => {
      chatArray.forEach((chat) => {
        if (
          (chat.SenderID === user.id && chat.ReceiverID === friend.id) ||
          (chat.SenderID === friend.id && chat.ReceiverID === user.id)
        ) {
          chatsBetweenAuthorAndFriend.push(chat);
        }
      });
    });
  }

  async function handleSubmit() {
    await postMessage(String(friend.id), "Text", textareaValue);
    setTextareaValue("");
    startRoom({}, handleSetFailedToJoin, handleSetJoinName, handleSetShouldRedirectTo, toast);
    socketEmit("chat/new-message", textareaValue);

    await KnockClient.notify("game", {
      actor: user.TTID,
      recipients: [friend.TTID],
      data: {
        message: {
          value: friend.UserName,
        },
      },
    });
  }
  function enterKeyHandler(event) {
    if (!textareaValue && event.key === "Enter") {
      event.preventDefault();
    }
    if (textareaValue && event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  }
  useSocketOn("chat/new-message", () => {
    getChatHere();
  });

  return (
    <Section className={" flex flex-col"}>
      <div className=" flex gap-2 items-center max-sm:px-4 mt-4 justify-center max-sm:justify-start  ">
        <Image
          className="avatar rounded-full"
          src={friend ? friend.Avatar : "/images/unknown-user.png"}
          width={40}
          height={40}
          alt="avatar"
        />
        <span className="username">{friend ? friend.UserName : "loading..."}</span>
      </div>
      <div className="chatWithAi">
        <div className="chat">
          {chatsBetweenAuthorAndFriend &&
            user &&
            chatsBetweenAuthorAndFriend
              .map((chat) => {
                return (
                  <div key={chat.id} className={`${chat.SenderID === user.id ? "system" : "user"} `}>
                    <div>
                      <div className="avatar-container">
                        <Image
                          className="avatar"
                          src={true ? user.Avatar : friend.Avatar}
                          width={44}
                          height={44}
                          alt="avatar"
                        />
                      </div>

                      <div className={`${chat.ChatID === 1 && "pt-4"} message`}>
                        <div className="user-name">{`${
                          chat.SenderID === user.id ? user.UserName : friend.UserName
                        } `}</div>
                        <div className="text">
                          <div className="right-arrow"></div>
                          <div className="content">{chat.Message}</div>
                        </div>
                        <div className="date">
                          <div className="day-part"> {timeStampCalculator(chat.created_at)} </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              .reverse()}
          <div ref={dummy}></div>
        </div>
        <div className="send !bg-[#1A2531]">
          <textarea
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            onKeyDown={(e) => enterKeyHandler(e)}
            maxLength="200"
            className="txta"
            autoFocus
            placeholder="Message"
          ></textarea>
          <button
            type="button"
            disabled={!textareaValue}
            onClick={() => {
              handleSubmit();
            }}
          >
            <Image
              src={`${textareaValue ? "/icons/telegram-send-active.svg" : "/icons/telegram-send.svg"}`}
              width={30}
              height={30}
              alt="send"
            />
          </button>
        </div>
      </div>
    </Section>
  );
};
