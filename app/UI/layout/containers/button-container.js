export const ButtonContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full justify-center items-center max-w-lg">
      {children}
    </div>
  );
};
