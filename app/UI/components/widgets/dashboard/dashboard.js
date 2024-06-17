"use client";
import { useEffect, useState } from "react";
import { OnlineFavorites } from "../online-favorites";
import { DailyMission } from "../daily-mission";
import { GameFeed } from "../game-feed";

export const Dashboard = () => {
  const tabs = ["feed", "news"];
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <>
      {activeTab === "feed" && (
        <>
          <OnlineFavorites />
          <DailyMission />
          <GameFeed />
        </>
      )}
      {activeTab === "news" && (
        <div className="flex justify-center items-center p-6 text-4xl font-bold text-blue-violet">
          Coming Soon...
        </div>
      )}
    </>
  );
};
