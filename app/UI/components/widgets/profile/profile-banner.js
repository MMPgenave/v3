"use client";
import banner from "@/app/lib/assets/img/banner.png";
import { BannerAddButton as AddButton, Banner, UserName } from "../../base";
import { AvatarContainer, ProfileBannerContainer as Container } from "@/app/UI/layout";
import Image from "next/image";
import { changeUsernameAction } from "@/app/actions/change-username.action";
import { ProileChanger } from "@/app/UI/components/base/ProfileChanger";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/UI/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getAuthorData } from "@/app/actions/get-author-data";
export const ProfileBanner = () => {
  const userQuery = useQuery({
    queryKey: ["author"],
    queryFn: getAuthorData,
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  if (userQuery.isPending) return <div className=" text-sm text-center">Loading User Profile ...</div>;
  if (userQuery.error) return <div className=" text-sm text-center text-red-600">Error</div>;
  const user = userQuery?.data.Data.User;
  return (
    <Container>
      <Banner img={banner} />
      <AddButton />
      <AvatarContainer>
        <div className=" mb-7 sm:mb-3 relative  w-fit">
          <Image
            src={user.Avatar}
            width={100}
            height={100}
            alt="avatar"
            className={`  rounded-full w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] cursor-pointer border-2 border-gold`}
          />
          <Dialog>
            <DialogTrigger>
              <i className=" bi bi-camera-fill hover:cursor-pointer text-4xl text-gold  absolute bottom-2 left-[50%] -ml-[18px] "></i>
            </DialogTrigger>
            <DialogContent className=" bg-gold">
              <DialogHeader>
                <DialogTitle className="text-sm mb-2 ">Choose Profile Photo</DialogTitle>
                <ProileChanger />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <UserName username={user.UserName} changeUsernameAction={changeUsernameAction} />
      </AvatarContainer>
    </Container>
  );
};
