import { Section, Tabs } from "@/app/UI/layout";
import React from "react";
import Link from "next/link";
import Fab from "@mui/material/Fab";

import Image from "next/image";
const Layout = ({ children }) => {
  const tabs = ["feed", "news", "global"];
  return (
    <Section className=" max-sm:mt-[164px] mt-[112px] ">
      <Tabs tabs={tabs} tab="feed" />
      {children}
      <Link
        href={"/dashboard/people/friends"}
        className="fixed bottom-[4rem]  right-8 md:bottom-2 bg-transparent rounded-full w-12 h-12"
      >
        <Fab color="#1687EF" aria-label="add" size="medium">
          <div className=" text-3xl">+</div>
        </Fab>
      </Link>
    </Section>
  );
};

export default Layout;
