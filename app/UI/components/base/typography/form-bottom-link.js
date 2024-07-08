import Link from "next/link";
export const BottomLink = ({ children, link, linkText }) => {
  return (
    <div className=" flex gap-2 items-center  after:bg-dim-gray w-full text-center">
      {children}
      <Link href={link} className="  capitalize font-bold text-slate-400 hover:opacity-80">
        {linkText}
      </Link>
    </div>
  );
};
