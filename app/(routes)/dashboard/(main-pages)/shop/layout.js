import { Section, Tabs } from "@/app/UI/layout";
import React from "react";

const Layout = ({ children }) => {
  const tabs = ["items", "nft", "packages"];
  return (
    <Section className=" max-sm:mt-[136px] mt-[112px] ">
      <Tabs tabs={tabs} tab="items" />
      {children}
    </Section>
  );
};

export default Layout;
