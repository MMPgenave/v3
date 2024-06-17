import { Section, Tabs } from "@/app/UI/layout";
import React from "react";

const Layout = ({ children }) => {
  const tabs = ["feed", "news", "global"];
  return (
    <Section>
      <Tabs tabs={tabs} tab="feed" />
      {children}
    </Section>
  );
};

export default Layout;
