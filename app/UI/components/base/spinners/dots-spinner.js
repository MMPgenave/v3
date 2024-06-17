export const DotsSpinner = () => {
  return (
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
      <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
      <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
    </div>
  );
};

export const WaitingGameSpinner = () => {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-full animate-pulse bg-blue-violet"></div>
      <div className="w-10 h-10 rounded-full animate-pulse bg-blue-violet"></div>
      <div className="w-10 h-10 rounded-full animate-pulse bg-blue-violet"></div>
    </div>
  );
};
