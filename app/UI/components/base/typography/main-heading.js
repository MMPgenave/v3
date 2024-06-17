export const MainHeading = ({ children, style }) => {
  return (
    <h1
      className={`text-dark-slate-gray capitalize font-bold text-4xl ${style}`}
    >
      {children}
    </h1>
  );
};
