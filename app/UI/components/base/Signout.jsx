"use client";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/UI/components/ui/tooltip";
import { signOut } from "@/app/actions/sign-out";
const Signout = () => {
  async function signOutHandler() {
    await signOut();
    // const data = await res.json();
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <i className="bi bi-box-arrow-left text-2xl text-gold cursor-pointer " onClick={signOutHandler}></i>
        </TooltipTrigger>
        <TooltipContent>
          <p className=" text-black">Sign out</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Signout;
