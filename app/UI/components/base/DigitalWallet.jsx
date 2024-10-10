import React from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/UI/components/ui/tooltip";

const DigitalWallet = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src={"/images/digital-wallet.png"}
            width={45}
            height={45}
            alt="digital wallet"
            className="rounded-[0.2rem] mt-2"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className=" !text-sm">Connect Your MetaMask Wallet</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DigitalWallet;
