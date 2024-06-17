import { Button, Progress } from "../../base";

export const UserCollection = ({ children }) => {
  return (
    <div style={{ 'background-color': 'black' , 'color' : 'white' }} className="md:col-start-2 md:row-span-5 justify-center w-full flex flex-col items-center p-4 bg-white shadow-md rounded-lg font-bold">
      <h2 className="capitalize font-bold text-blue-violet text-center flex ps-2 justify-between items-center">
        <span>my collection</span>
      </h2>
      <div className="gap-2 flex pb-4 flex-wrap min-h-52">{children}</div>
      <Button mode="lively" size="sm">
        All items
      </Button>
    </div>
  );
};
