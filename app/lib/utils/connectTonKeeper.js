export const connectTonKeeper = async () => {
  if (window.ethereum) {
    try {
      //   const tonkeeper = window.ton;

      // Request account access
      //   const accounts = await tonkeeper.requestAccounts();
      //   const account = accounts[0];
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      return account;
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
      throw error;
    }
  } else {
    throw new Error("MetaMask is not installed");
  }
};
