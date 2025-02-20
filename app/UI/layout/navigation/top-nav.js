"use client";
import { routes } from "@/app/lib/config/routes";
import { Avatar, TypographyLogo } from "../../components/base";
import { useEffect } from "react";
import { getAuthorData } from "@/app/actions";
import { Knock } from "@knocklabs/node";
import Notification from "@/app/UI/components/base/notification/notification";
import { useQuery } from "@tanstack/react-query";
import UserLocation from "@/app/UI/components/base/UserLocation/UserLocation";
import ConnectButton from "@/app/UI/components/base/buttons/ConnectToonKeeprWalletButton";
import { Suspense } from "react";

export const TopNav = () => {
  const { isPending, error, data, isFetching, isLoading, isError } = useQuery({
    queryKey: ["author"],
    queryFn: getAuthorData,
    suspense: true,
    refetchOnWindowFocus: false, // Disable refetch on window focus

  });

  // console.log(`user:${JSON.stringify(data, null, 2)}`)
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

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div className=" text-red-500">{error.message}</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav className=" fixed top-0 w-full max-sm:min-h-[140px] flex items-center justify-between p-4 bg-gradient-to-b from-[#146b8a] to-blackTheme  z-[100]">

        <div className=" flex gap-2 items-center ">
          <Avatar
            href={routes.PROFILE}
            src={user.Avatar}
            userName={<p className=" text-xl font-bold">{user.UserName}</p>}
          />
          <UserLocation />
        </div>

        <TypographyLogo />
        <div className="flex gap-4  items-center">
          <div className="flex gap-1 items-center text-base sm:text-xl hover:scale-110 transition-all">
            <span className=" p-1 text-slate-300 text- font-bold">{user ? user.Coin : 0}</span>
            <i className="bi bi-coin text-gold text-1xl"></i>
          </div>
          <ConnectButton />
          <Notification />
        </div>
      </nav>
    </Suspense>
  );
};
