import { CircleSpinner as Spinner } from "./UI/components/base";

const Loading = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 z-50 bg-blackTheme backdrop-blur-sm w-full h-full flex transition-all items-center justify-center">
        <div
          className={`absolute top-1/5 lef h-14 w-14 rounded-full before:content-[''] before:border-2 before:border-gold before:rounded-full before:w-16 before:h-16 before:absolute before:left-0 before:scale-100 before:opacity-1 before:animate-waves before:transition-all after:content-[''] after:border-2 after:border-gold after:rounded-full after:w-16 after:h-16 after:absolute after:left-0 after:opacity-1  after:scale-150`}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
