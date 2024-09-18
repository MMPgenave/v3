"use client";
import { routes } from "@/app/lib/config/routes";
import { Avatar, TypographyLogo } from "../../components/base";
import { useEffect } from "react";
import { getAuthorData } from "@/app/actions";
import { Knock } from "@knocklabs/node";
import Notification from "@/app/UI/components/base/notification/notification";
import { useQuery } from "@tanstack/react-query";

export const TopNav = () => {
  const userQuery = useQuery({
    queryKey: ["author"],
    queryFn: () => getAuthorData(),
    suspense: true,
    staleTime: 5 * 1000, // اگر درخواست موفقیت آمیز بود، تا 5 ثانیه دیگر هیچ درخواست جدیدی نفرست
  });
  const user = userQuery.data.Data.User;
  const KnockClient = new Knock("sk_test_amLsV98Sm_1FWsTVA--BKZYSMp0i2D9E7E3-S2AkC9Y");

  async function createKnockUser() {
    const KnockUser = await KnockClient.users.identify(user ? user.TTID : "196", {
      name: user && user.UserName,
      email: user && user.email,
    });
  }
  useEffect(() => {
    createKnockUser();
  }, [user]);

  return (
    <nav className=" relative top-0 w-full flex items-center justify-between p-4 bg-[#020041] z-[100]">
      <Avatar
        href={routes.PROFILE}
        src={user ? user.Avatar : "/images/unknown-user.png"}
        userName={user ? user.UserName : "Loading..."}
      />
      <TypographyLogo />
      <div className="flex gap-4">
        <div className="flex gap-1 items-center text-base sm:text-xl hover:scale-110 transition-all">
          <span className=" p-1 text-slate-300 text- font-bold">{user ? user.Coin : 0}</span>
          <i className="bi bi-coin text-yellow-500 text-1xl"></i>
        </div>
        <Notification />
      </div>
    </nav>
  );
};
