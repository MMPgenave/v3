"use client";
import React, { useState } from "react";
import { connectTonKeeper } from "../../../../lib/utils/connectTonKeeper";
import DigitalWallet from "../DigitalWallet";
const ConnectButton = () => {
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    try {
      const connectedAccount = await connectTonKeeper();
      setAccount(connectedAccount);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <div onClick={handleConnect}>
          <DigitalWallet />
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
