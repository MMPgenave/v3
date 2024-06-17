import Image from "next/image";
import {
  Progress,
  FeedSubHeading as SubHeading,
} from "@/app/UI/components/base";
import icon from "@/app/lib/assets/img/icons/icon25.png";
export const DailyMission = () => {
  return (
    <div style={ {    'background-color': 'black'} } className=" flex justify-between items-center p-2 gap-2 border-b-2 border-slate-300">
      <Image
        className="rounded-full w-16 h-16 sm:w-20 sm:h-20 border p-1 border-dim-gray"
        src={icon}
        alt="daily mission"
      />
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center justify-between">
          <SubHeading>win 2 ranked games </SubHeading>
          <span className="text-sm text-dim-gray">11h 10min</span>
        </div>
        <h2 className="uppercase text-sm">daily mission</h2>
        <div className="flex items-baseline justify-between w-full pe-2">
          <Progress size="w-1/2"></Progress>
          <span className="flex gap-1 uppercase text-sm">
            <i className="bi bi-coin text-sm sm:text-lg text-neon-carrot"></i>
            150
          </span>
        </div>
      </div>
    </div>
  );
};
