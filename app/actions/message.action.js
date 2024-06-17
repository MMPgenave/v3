import { array } from "yup";
import { routes } from "../lib/config/routes";

export async function postMessage(ReceiverID, Type, Message) {
  try {
    const res = await fetch(routes.SENDMESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ReceiverID,
        Type,
        Message,
      }),
    });
    const data = await res.json();
    // console.log(`data in post messaage go to action is :${JSON.stringify(data)}`);
    if (res.statusCode === 422) {
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      return;
    }
  } catch (error) {
    console.log("error in send message", error);
  }
}
export async function getMessageList() {
  try {
    const response = await fetch(`${routes.GETMESSAGELIST}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(`chatList is :${JSON.stringify(data)}`);
    return data.Data.Chats;
  } catch (error) {
    console.log(`Error in get chat list ids :${error}`);
  }
}
export async function getChat(chatId) {
  try {
    const response = await fetch(`${routes.GETMESSAGE}/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(`getChat is ${JSON.stringify(data)}`);
    return data.Data.Chats;
  } catch (error) {
    console.log(`Error in get chat  is:${error}`);
  }
}
export async function getMultipleChats(chatIds) {
  try {
    const chatPromises = chatIds.map((chatId) => getChat(chatId));
    const chats = await Promise.all(chatPromises);

    // Filter out any null values (in case of errors)
    const filteredChats = chats.filter((chat) => chat);

    return filteredChats;
  } catch (error) {
    console.log(`Error in getMultipleChats is: ${error}`);
    return [];
  }
}
