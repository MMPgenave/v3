export const routes = {
  AUTH: "/auth",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FUN: {
    GAMES: "/dashboard/fun/games",
    CHATROOMS: "/dashboard/fun/chatrooms",
  },
  HOME: {
    FEED: "/dashboard/home/feed",
    NEWS: "/dashboard/home/news",
  },
  PROFILE: "/dashboard/profile",
  SHOP: "/dashboard/shop",
  TOURNAMENTS: "/dashboard/tournaments",

  SETTINGS: {
    MAIN: "/dashboard/settings",
    ACCOUNT: "/dashboard/settings/account",
    DEVICES: "/dashboard/settings/devices",
    NOTIFICATION: "/dashboard/settings/notification",
    LANGUAGE: "/dashboard/settings/language",
    PRIVACY: "/dashboard/settings/privacy",
    ABOUT: "/dashboard/settings/about",
    HELPCONTACT: "/dashboard/settings/help-contact",
  },

  REFRESHTOKEN: "/api/auth/refresh",
  SIGNIN: "/api/auth/sign-in",
  SIGNOUT: "/api/auth/sign-out",
  SIGNUP: "/api/auth/sign-up",
  CHECKUSERNAME: "/api/users/check-username",
  GETUSERINFO: "/api/users/profile",
  GETUSERFRIEND: "/api/users/friends",
  GETUSERFRIENDOF: "/api/users/friends-of",
  ADDFRIENDS: "/api/users/add-friends",
  SEARCHUSERS: "/api/users/search-users",
  GETUSERDETAILS: "/api/users/user-details",
  SENDMESSAGE: "/api/users/send-message",
  GETMESSAGE: "/api/users/get-message",
  GETMESSAGELIST: "/api/users/get-message-list",
  GET_USER_DETAILS_BY_ID: "/api/users/get-user-details-by-id",
  CREATE_ROOM: "/api/room/create-room",
  CLOSE_ROOM: "/api/room/close-room",
  GAMESLIST: {
    BACKGAMMON: "/game/backgammon/games",
  },
  BACKGAMMONMATCH: "/backgammon/match",
  CHANGE_USERNAME: "/api/users/changeUsername",
  UPLOAD_IMAGE: "/api/users/uploadImage",
};

export const APIRoutes = {
  REGISTER: "/api/V1/Auth/register",
  LOGIN: "/api/V1/Auth/login",
  REFRESH: "/api/V1/Auth/refresh",
  LOGOUT: "/api/V1/Auth/logout",
  CHECKUSERNAME: "/api/V1/Auth/CheckUsername",
  PROFILE: "/api/V1/User/profile",
  GETUSERFRIEND: "/api/V1/User/Friends/FriendsList",
  GETUSERFRIENDOF: "/api/V1/User/Friends/FriendsOfList",
  ADDFRIENDS: "/api/V1/User/Friends/Add",
  SEARCHUSERS: "/api/V1/User/search",
  GETUSERDETAILS: "/api/V1/User/details",
  SENDMESSAGE: "/api/V1/Chat/Send",
  GETMESSAGE: "/api/V1/Chat/Get",
  GETMESSAGELIST: "/api/V1/Chat/List",
  GET_USER_DETAILS: "/api/V1/User/details",
  CREATE_ROOM: "/api/V1/Game/Room/Create",
  CLOSE_ROOM: "/api/V1/Game/Room/Close",
  CHANGE_USERNAME: "/api/V1/User/profile/UpdateUserName",
  CHANGE_AVATAR: "/api/V1/User/profile/UpdateAvatar",
};

export const BASE_URL = process.env.BASE_URL;
