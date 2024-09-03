"use client";
import { routes } from "@/app/lib/config/routes";
import { BottomNavButton, GameNavButton } from "../../components/base";

export const BottomMenu = () => {
  return (
    <nav
      className="p-[5px] bg-[#020041]  fixed bottom-0 md:flex-col
      md:top-0 md:pt-[7rem] md:pb-8  md:w-1/4 lg:w-1/5 xl:w-1/6 w-full text-secondary 
     flex justify-evenly items-center text-2xl md:text-xl   "
    >
      <BottomNavButton icon="house-fill" href={routes.HOME.FEED} title="home"></BottomNavButton>
      <BottomNavButton icon="cup" href={routes.TOURNAMENTS} title="tournaments"></BottomNavButton>
      <GameNavButton href={routes.FUN.GAMES} title="games" />
      <BottomNavButton icon="shop" href={"/dashboard/shop/items"} title="shop"></BottomNavButton>
      <BottomNavButton icon="person-circle" href={routes.PROFILE} title="profile"></BottomNavButton>
    </nav>
  );
};
