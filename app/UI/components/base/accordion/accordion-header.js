import clsx from "clsx";

export const AccordionHeader = ({
  isOpen,
  first,
  children,
  toggleAccordion,
  index,
}) => {
  // conditional styles
  const buttonStyle = clsx(
    "capitalize font-bold z-50 flex justify-between w-full text-left py-4 px-5 text-base border border-gun-smoke ",
    isOpen && "text-blue-violet bg-lavender",
    !isOpen && "text-shark z-50 bg-white",
    first && "rounded-t-md"
  );

  const arrowUpStyle = clsx(
    "bi bi-chevron-up transition-all duration-500",
    !isOpen && "rotate-180 hover:animate-wiggle"
  );

  return (
    <h2 className="w-full" onClick={() => toggleAccordion(index)}>
      <button className={buttonStyle} type="button">
        {children}
        <i className={arrowUpStyle}></i>
      </button>
    </h2>
  );
};
