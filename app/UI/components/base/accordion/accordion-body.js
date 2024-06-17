import clsx from "clsx";

export const AccordionBody = ({ children, collapsed }) => {
  const bodyStyle = clsx(
    "text-sm overflow-hidden transition-all duration-1000 ",
    collapsed && "h-0 overflow-hidden py-0",
    !collapsed && "py-5"
  );
  return (
    <div className={"px-4 border border-t-0 border-gun-smoke"}>
      <p className={bodyStyle}>{children}</p>
    </div>
  );
};
