import { Section, Tabs } from "@/app/UI/layout";
import React from "react";

const Layout = ({ children }) => {
  const tabs = ["friends", "friends-of", "groups"];
  return (
    <Section>
      <Tabs tabs={tabs} tab="friends" />
      {children}
    </Section>
  );
};

export default Layout;
