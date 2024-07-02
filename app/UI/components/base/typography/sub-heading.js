export const SubHeading = ({ children, className }) => {
  return <h2 className={`text-dim-gray font-bold text-lg ${className}`}>{children}</h2>;
};

export const GetStartedSubHeading = ({ children }) => {
  return <SubHeading className="text-center text-slate-300">{children}</SubHeading>;
};

export const FeedSubHeading = ({ children }) => {
  return <SubHeading className="uppercase text-sm">{children}</SubHeading>;
};

export const GameFeedSubHeading = ({ children }) => {
  return <SubHeading className="capitalize">{children}</SubHeading>;
};
