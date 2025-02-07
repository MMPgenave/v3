"use client";
import { routes } from "@/app/lib/config/routes";
import { BottomNavButton } from "../../components/base";
import BottomProfileButton from "@/app/UI/components/base/buttons/bottom-profile-button";
export const BottomMenu = () => {
  return (
    <nav
      className="p-[5px] bg-blackTheme     fixed bottom-0 md:flex-col
      md:top-[112px]  md:pt-[20px] md:pb-8  md:w-1/4 lg:w-1/5 xl:w-1/6 w-full text-secondary 
     flex justify-evenly items-center text-2xl md:text-xl   "
    >
      <BottomNavButton icon="house-fill" href={routes.HOME.FEED} title="home"></BottomNavButton>
      <BottomNavButton icon="cup" href={routes.TOURNAMENTS} title="tournaments"></BottomNavButton>
      <BottomNavButton icon="dice-6" href={routes.FUN.GAMES} title="games"></BottomNavButton>
      <BottomNavButton icon="shop" href={"/dashboard/shop/items"} title="shop"></BottomNavButton>
      <BottomProfileButton href={routes.PROFILE} title="profile" />
    </nav>
  );
};
