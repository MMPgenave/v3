import Link from "next/link";
export const BottomLink = ({ children, link, linkText }) => {
  return (
    <p className="capitalize  p-1 gap-1 after:bg-dim-gray w-full text-center">
      {children}
      <Link href={link} className="font-bold text-blue-violet ps-1">
        {linkText}
      </Link>
    </p>
  );
};