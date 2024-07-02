import React from "react";
import { ChatWithOthers } from "@/app/UI/components/base/chat/chat";

const page = async ({ params }) => {
  return <ChatWithOthers friendUserName={params.slug} />;
};

export default page;
