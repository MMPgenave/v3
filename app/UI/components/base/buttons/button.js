"use client";
import clsx from "clsx";
import { DotsSpinner as Spinner } from "@/app/UI/components/base";

export const Button = ({
  mode,
  square,
  outline,
  children,
  size,
  additionalStyles,
  isLoading,
  type,
  onClick,
  disabled,
}) => {
  function handleClick() {
    if (onClick) {
      onClick();
    } else return;
  }
  const modes = {
    primary: "bg-primary hover:bg-primary",
    lively: "bg-blue-violet hover:bg-blue-violet",
    secondary: "bg-secondary hover:bg-dark-slate-gray hover:text-white",
    success: "bg-success hover:bg-forest-green",
    info: "bg-info hover:bg-deep-sky-blue",
    warning: "bg-warning hover:bg-neon-carrot",
    danger: "bg-danger hover:bg-firebrick",
  };

  const outlineStyles = {
    primary: "text-primary border-primary hover:bg-primary",
    lively: "text-blue-violet border-blue-violet hover:bg-blue-violet",
    secondary: "text-dark-slate-gray border-secondary hover:bg-dark-slate-gray",
    success: "text-success border-success hover:bg-success",
    info: "text-info border-info hover:bg-info",
    warning: "text-warning border-warning hover:bg-warning",
    danger: "text-danger border-danger hover:bg-danger",
  };
  const sizes = {
    lg: "py-3 px-6 text-xl",
    sm: "p-2 text-base",
    base: "px-5 py-4",
  };

  const styles = clsx(
    "font-bold capitalize transition-all flex justify-center items-center",
    outline && "bg-transparent border border-2 hover:text-white",
    !outline && modes[mode],
    !square && "rounded-full",
    outline && outlineStyles[mode],
    (mode !== "secondary") & !outline && "text-white",
    size && sizes[size],
    !size && sizes.base,
    disabled && "cursor-not-allowed hover:bg-slate-300 bg-slate-300",
    additionalStyles
  );

  return (
    <button className={styles} type={type} onClick={handleClick}>
      {!isLoading && children}
      {isLoading && <Spinner />}
    </button>
  );
};
