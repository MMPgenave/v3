export const ConnectSocialAccounts = () => {
  return (
    <>
      <p className="capitalize p-1 flex items-center text-slate-400 gap-1 before:content-[''] before:block before:w-32 before:h-[2px] before:bg-dim-gray after:content-[''] after:block after:w-32 after:h-[2px] after:bg-dim-gray">
        or
      </p>
      <section className=" mt-2 flex gap-5  w-full justify-center">
        <i className="bi bi-google cursor-pointer text-[#FAFAB6] text-3xl"></i>
        <i className="bi bi-apple cursor-pointer text-[#FAFAB6] text-3xl"></i>
        <i className="bi bi-facebook cursor-pointer text-[#FAFAB6] text-3xl"></i>
      </section>
    </>
  );
};
