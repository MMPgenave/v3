import banner from "@/app/lib/assets/img/banner.png";
import { BannerAddButton as AddButton, Banner, AddImageButton, UserName, ProfileAvatar } from "../../base";
import { AvatarContainer, ProfileBannerContainer as Container } from "@/app/UI/layout";
import { useAppSelector } from "@/app/lib/redux/hooks";
import Image from "next/image";

export const ProfileBanner = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Container>
      <Banner img={banner} />
      <AddButton />
      <AvatarContainer>
        <Image
          src={user.Avatar}
          width={100}
          height={70}
          alt="avatar"
          className={` rounded-full cursor-pointer border-2 border-gold`}
        />
        <AddImageButton />
        <UserName username={user.UserName} changeUsernameAction={changeUsernameAction} />
      </AvatarContainer>
    </Container>
  );
};
