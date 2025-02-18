import React from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/UI/components/ui/tooltip";

const DigitalWallet = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <i className="bi bi-wallet2 text-2xl text-gold"></i>
        </TooltipTrigger>
        <TooltipContent>
          <p className=" !text-sm">Connect Your MetaMask Wallet</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DigitalWallet;
