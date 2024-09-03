"use client";
import { routes } from "@/app/lib/config/routes";
import { useAppSelector } from "@/app/lib/redux/hooks";
import Link from "next/link";

export const CoinBox = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="flex gap-6 text-xl p-2 items-center my-3 ">
      <div className="flex items-center gap-1">
        <i className="bi bi-coin text-2xl text-neon-carrot"></i>
        <span className="  font-bold text-black">{user.Coin}</span>
        <i className="bi bi-plus cursor-pointer bg-blue-violet text-white rounded-full flex items-center p-1 text-sm"></i>
      </div>
      <div className="flex items-center gap-1">
        <i className="bi bi-gem text-2xl text-info"></i>
        <span className="  font-bold text-black">{user.Gem}</span>
        <i className="bi bi-plus cursor-pointer bg-blue-violet text-white rounded-full flex items-center p-1 text-sm"></i>
      </div>
      <i className="bi bi-wallet-fill cursor-pointer text-info text-2xl"></i>
      <Link href={routes.SETTINGS.MAIN}>
        <i className="bi bi-gear cursor-pointer text-shark rounded-lg text-2xl"></i>
      </Link>
    </div>
  );
};
