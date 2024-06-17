export const Progress = ({ size, percent }) => {
  return (
    <div className={`relative ${size}`}>
      <div className="absolute bg-blue-violet w-2/3 h-2 rounded-lg z-25"></div>
      <div className="bg-slate-400 w-full h-2 rounded-lg"></div>
    </div>
  );
};
