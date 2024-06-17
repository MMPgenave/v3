export const ConnectSocialAccounts = () => {
  return (
    <>
      <p className="capitalize p-1 flex items-center gap-1 before:content-[''] before:block before:w-32 before:h-[2px] before:bg-dim-gray after:content-[''] after:block after:w-32 after:h-[2px] after:bg-dim-gray">
        or
      </p>
      <section className="flex gap-4 text-2xl w-full justify-center">
        <i className="bi bi-google cursor-pointer text-firebrick"></i>
        <i className="bi bi-apple cursor-pointer text-dim-gray"></i>
        <i className="bi bi-facebook cursor-pointer text-blue-600"></i>
      </section>
    </>
  );
};
