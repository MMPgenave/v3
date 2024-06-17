import { avatars, landscapes, portraits } from "../data/images";
import { nameList } from "../data/usernames";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import qs from "query-string";

export function randomPhotoGenerator(min, max, type) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (type === "portrait") {
    const selectedWallpaper = portraits[randomNumber];
    return selectedWallpaper;
  } else if (type === "landscape") {
    const selectedWallpaper = landscapes[randomNumber];
    return selectedWallpaper;
  } else if (type === "avatar") {
    const selectedAvatar = avatars[randomNumber];
    return selectedAvatar;
  }
}

export function randName() {
  let finalName = nameList[Math.floor(Math.random() * nameList.length)];
  finalName += nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

export function createPathSegment(str) {
  return str.split(" ").join("-");
}

export function createTitleFromPathname(pathname) {
  const arr = pathname.split("/");
  return arr[arr.length - 1].split("-").join(" ");
}
export const timeStampCalculator = (value) => {
  const now = new Date();
  const diffInMillis = now.getTime() - new Date(value).getTime();
  const diffInSeconds = Math.floor(diffInMillis / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears} ${diffInYears === 1 ? "Year" : "Years"} ago`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} ${diffInMonths === 1 ? "Month" : "Months"} ago`;
  } else if (diffInWeeks > 0) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? "Week" : "weeks"} ago`;
  } else if (diffInDays > 0) {
    return `${diffInDays} ${diffInDays === 1 ? "Day" : "Days"} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} ${diffInHours === 1 ? "Hour" : "Hours"} ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "Minue" : "Minues"} ago`;
  } else {
    return "Now";
  }
};
export function formUrlQuery({ params, key, value }) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}
export function removeKeysFromQuery({ params, keys }) {
  const currentUrl = qs.parse(params);
  keys.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}
