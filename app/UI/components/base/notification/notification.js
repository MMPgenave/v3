"use client";
import { useState, useRef, useEffect } from "react";
import "@knocklabs/react-notification-feed/dist/index.css";

import { KnockFeedProvider, NotificationIconButton, NotificationFeedPopover } from "@knocklabs/react-notification-feed";

import { getAuthorData } from "@/app/actions";

const YourAppLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnClient, setisOnClient] = useState(false);
  const notifButtonRef = useRef(null);
  const [user, setuser] = useState();

  const getUser = async () => {
    const res = await getAuthorData();
    setuser(res.Data.User);
  };
  useEffect(() => {
    getUser();
    setisOnClient(true);
  }, []);
  return isOnClient && user ? (
    <KnockFeedProvider
      feedId="b88d7f16-8608-403d-a5e7-9b9bceb6e64d"
      apiKey="pk_test_S8Bl-2mOPitpfU5MSyboa6MKRJe22k7sg1ZjwG4ejU8"
      userId={user.TTID}
    >
      <>
        <NotificationIconButton className="mt-10" ref={notifButtonRef} onClick={(e) => setIsVisible(!isVisible)} />
        <NotificationFeedPopover buttonRef={notifButtonRef} isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </>
    </KnockFeedProvider>
  ) : (
    <i className="bi bi-bell-fill text-xl text-info cursor-pointer hover:scale-110 transition-all"></i>
  );
};
export default YourAppLayout;
