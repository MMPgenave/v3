export const Section = ({ children, className }) => {
  return (
    <section
      className={`main-content p-4 w-full md:w-3/4 md:ml-[25%]  lg:w-4/5 lg:ml-[20%] xl:w-5/6 xl:ml-[16.6667%]   text-slate-50  ${className}`}
    >
      {children}
    </section>
  );
};

export const ProfileSection = ({ children }) => {
  return <Section className="bg-lavender flex flex-col items-center ">{children}</Section>;
};
export const TournamentsSection = () => {
  return (
    <Section className="flex justify-center items-center p-6 text-4xl font-bold text-blue-violet">
      Coming Soon...
    </Section>
  );
};
export const GamesSection = ({ children }) => {
  return (
    <Section className="  grid lg:grid-cols-2 justify-center items-center h-full gap-2  border border-red-200 ">
      {children}
    </Section>
  );
};
export const ShopSection = ({ children }) => {
  return (
    <Section className="flex flex-col items-center bg-black text-[#fff] rounded-sm gap-6 mb-20">{children}</Section>
  );
};
