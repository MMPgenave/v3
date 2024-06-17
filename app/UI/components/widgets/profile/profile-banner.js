"use client";
import banner from "@/app/lib/assets/img/banner.png";
import {
  BannerAddButton as AddButton,
  Banner,
  AddImageButton,
  UserName,
  ProfileAvatar,
} from "../../base";
import {
  AvatarContainer,
  ProfileBannerContainer as Container,
} from "@/app/UI/layout";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { routes } from "@/app/lib/config/routes";

export const ProfileBanner = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Container>
      <Banner img={banner} />
      <AddButton />
      <AvatarContainer>
        <ProfileAvatar href={routes.PROFILE} src={user.Avatar} />
        <AddImageButton />
        <UserName username={user.UserName} />
      </AvatarContainer>
    </Container>
  );
};
