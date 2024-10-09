"use client";
import { routes } from "@/app/lib/config/routes";
import { Avatar, TypographyLogo } from "../../components/base";
import { useEffect } from "react";
import { getAuthorData } from "@/app/actions";
import { Knock } from "@knocklabs/node";
import Notification from "@/app/UI/components/base/notification/notification";
import { useQuery } from "@tanstack/react-query";
import UserLocation from "@/app/UI/components/base/UserLocation/UserLocation";
export const TopNav = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["author"],
    queryFn: () => getAuthorData(),
  });
  const user = data?.Data.User;
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
      {!error && (
        <div className=" flex gap-2 items-center max-sm:flex-col">
          <Avatar
            href={routes.PROFILE}
            src={!isPending ? user.Avatar : "/images/unknown-user.png"}
            userName={!isPending ? user.UserName : "Loading..."}
          />
          <UserLocation />
        </div>
      )}
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
