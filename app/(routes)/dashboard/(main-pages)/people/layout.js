import { Section, Tabs } from "@/app/UI/layout";
import React from "react";
import { DialogDemo } from "@/app/UI/components/base/pupop/popup.js";

const Layout = ({ children }) => {
  const tabs = ["friends", "friends-of", "groups"];
  return (
    <Section className={"max-sm:mt-[164px] mt-[112px]"}>
      <Tabs tabs={tabs} tab="friends" />
      {children}
      <DialogDemo />
    </Section>
  );
};

export default Layout;
