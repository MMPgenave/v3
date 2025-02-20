"use client";
import { getMessageList, getMultipleChats } from "@/app/actions/message.action";
import LastChatMessage from "@/app/UI/components/base/chat/LastChatMessage";
import { getAuthorData } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import NoResult from "../NoResult";
const AuthorChats = () => {
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
    return fetchedChats;
  };

  const {
    isPending: isPendingInGetAuthor,
    error: errorInGetAuthor,
    data: authorData,
  } = useQuery({
    queryKey: ["author"],
    queryFn: getAuthorData,

    refetchOnWindowFocus: false, // Disable refetch on window focus
  });
  const {
    isPending: isPendingInGetChat,
    error: errorInGetChat,
    data: chatData,
  } = useQuery({
    queryKey: ["chat"],
    queryFn: () => getChatHere(),
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  if (isPendingInGetAuthor || isPendingInGetChat)
    return <div className=" mt-5 text-slate-200 flex justify-center items-center">Loading chats...</div>;
  if (errorInGetAuthor || errorInGetChat)
    return (
      <div className=" mt-5 text-slate-200 flex justify-center items-center">
        {"Error in loading chats." + errorInGetChat?.message}
      </div>
    );

  // console.log(`author in chat:${JSON.stringify(authorData)}`);
  // console.log(`author in chat:${JSON.stringify(chatData)}`);

  return (
    <div className="mt-3 flex flex-col gap-3 max-sm:pb-[90px]  ">
      {chatData.length === 0 ? (
        <div>
          <NoResult
            title="You havent chatted with your friends yet."
            description={"Break the silence and click the button below to find a friend and talk to them."}
            button_content={"Search Users"}
            button_href={"/dashboard/home/global"}
          />
        </div>
      ) : (
        chatData?.map((chatArray) => {
          const chat = chatArray[0];
          const { SenderID, ReceiverID } = chat;
          let friendId;
          if (SenderID === authorData.Data.User.id) {
            friendId = ReceiverID;
          } else {
            friendId = SenderID;
          }
          return (
            <div key={chat.id}>
              <LastChatMessage chat={chat} authorId={authorData.Data.User.id} friendId={friendId} />
            </div>
          );
        })
      )}
    </div>
    // "chats loaded"
  );
};

export default AuthorChats;
