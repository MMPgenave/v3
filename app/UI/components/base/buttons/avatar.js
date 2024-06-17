import { randName, randomPhotoGenerator } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Avatar = ({ className, href, src }) => {
  const hasAvatar = src !== "No Avatar";
  if (src === "No Avatar") {
  }
  const avatar = randomPhotoGenerator(0, 24, "avatar");

  return href ? (
    <Link href={href}>
      <Image
        src={hasAvatar ? src : avatar.src}
        width={100}
        height={100}
        alt="avatar"
        className={`w-12 sm:w-16 rounded-full cursor-pointer ${className}`}
      />
    </Link>
  ) : (
    <Image
      src={hasAvatar ? src : avatar.src}
      width={100}
      height={100}
      alt="avatar"
      className={`w-12 sm:w-16 rounded-full    ${className}`}
    />
  );
};

export const ProfileAvatar = ({ href, src }) => {
  return <Avatar href={href} src={src} className="w-24 sm:w-24" />;
};

export const OnlineFriendAvatar = ({ href, src, name }) => {
  const randomName = randName();
  return (
    <div className="flex flex-col items-center justify-center ">
      <Avatar href={href} src={src} className="w-12 sm:w-20" />
      <span className="text-sm lowercase">{name ? name : randomName}</span>
    </div>
  );
};
