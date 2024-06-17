import React from "react";
import { ChatWithOthers } from "@/app/UI/components/base/chat/chat";

const page = async ({ params }) => {
  return (
    <div>
      <ChatWithOthers friendUserName={params.slug} />
    </div>
  );
};

export default page;
