"use client";
import { routes } from "@/app/lib/config/routes";
import { Avatar, LogoutButton, TypographyLogo } from "../../components/base";
// import { useAppSelector } from "@/app/lib/redux/hooks";
import { useEffect, useState } from "react";
import { getAuthorData } from "@/app/actions";
import { Knock } from "@knocklabs/node";
import Notification from "@/app/UI/components/base/notification/notification";
export const TopNav = () => {
  const [user, setuser] = useState();

  const getUser = async () => {
    const res = await getAuthorData();
    setuser(res.Data.User);
  };
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className=" relative top-0 w-full flex items-center justify-between p-4 bg-[#020041] z-[100]">
      <Avatar
        href={routes.PROFILE}
        src={user ? user.Avatar : "/images/unknown-user.png"}
        userName={user ? user.UserName : "User"}
      />
      <TypographyLogo />
      <div className="flex gap-4">
        <div className="flex flex-col justify-between items-end pt-1 ">
          <div className="flex gap-1 items-center text-base sm:text-xl hover:scale-110 transition-all">
            <span className=" p-1 text-slate-300 text- font-bold">{user ? user.Coin : 0}</span>
            <i className="bi bi-coin text-yellow-500 text-1xl"></i>
          </div>
          <div className="flex gap-1 items-center text-base sm:text-xl hover:scale-110 transition-all">
            <span className=" p-1 text-slate-300 text- font-bold">{user ? user.Gem : 0}</span>
            <i className="bi bi-gem text-info text-1xl"></i>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Notification />
          <div className="flex gap-1 items-center text-base sm:text-xl hover:scale-110 transition-all ">
            <span className=" p-1 text-slate-300 text- font-bold">Wallet</span>
            <i className="bi bi-wallet-fill cursor-pointer text-info text-1xl"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
