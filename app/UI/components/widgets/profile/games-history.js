import { Button } from "../../base";

export const GamesHistory = ({ children }) => {
  return (
    <div className="flex flex-col p-2 justify-center w-full ">
      <h2 className="capitalize   font-bold text-black text-center flex ps-2 justify-between">
        <span>history</span>
      </h2>
      <div className="flex flex-col mt-2 items-center p-4 gap-4 bg-[#241755] shadow-md rounded-lg font-bold">
        {children}
      </div>
    </div>
  );
};
