import React from "react";

export const LoadingSpinner = ({ width = "w-8", height = "h-8", color = "border-blue-500" }) => {
  return (
    <div
      className={`inline-block ${width} ${height} animate-spin rounded-full border-4 border-solid ${color} border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
