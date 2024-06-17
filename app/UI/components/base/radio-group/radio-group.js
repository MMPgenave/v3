"use client";

import clsx from "clsx";

export const RadioGroup = ({
  selected,
  handleSetSelected,
  items,
  handleSetBetAmount,
}) => {
  const handleClick = (value) => {

    handleSetSelected(value);
    handleSetBetAmount(value);
  };

  return (
    <ul className="p-2 flex flex-wrap gap-3">
      {items.map((item, index) => {
        const style = clsx(
          "w-4 h-4 rounded-full cursor-pointer after:w-4",
          selected == item.amount
            ? "bg-white border border-[0.35rem] border-blue-violet"
            : "bg-secondary hover:bg-slate-300"
        );
        return (
          <li key={index} className="flex gap-1 items-center">
            <div
              className={style}
              onClick={() => handleClick(item.amount)}
            ></div>
            <label className="flex gap-1 text-lg items-center">
              {item.amount}
              <i className={`bi ${item.icon} text-neon-carrot text-sm`}></i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
