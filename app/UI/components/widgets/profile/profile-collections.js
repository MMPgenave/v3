import { Button, Progress } from "../../base";

export const UserCollection = ({ children }) => {
  return (
    <div className=" bg-black text-white md:col-start-2 md:row-span-5 max-sm:items-center justify-center w-full gap-1 flex flex-col items-start p-4  shadow-md rounded-lg font-bold">
      <h2 className="capitalize font-bold text-gold/80 text-center flex ps-2 justify-between items-center">
        <span>my collection</span>
      </h2>
      <div className="gap-2 flex items-center justify-center pb-4 text-slate-300 flex-wrap min-h-52">{children}</div>
      <Button mode="gold" size="sm">
        All items
      </Button>
    </div>
  );
};
