import { CircleSpinner as Spinner } from "./UI/components/base";

const Loading = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 z-50 bg-blackTheme backdrop-blur-sm w-full h-full flex transition-all items-center justify-center">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
