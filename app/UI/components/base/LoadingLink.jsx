"use client";

import { useState, startTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/app/UI/components/base";
import { DotsSpinner as Spinner } from "@/app/UI/components/base";

const LoadingLink = ({ href, children, className, outline, backgroundColor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    startTransition(() => {
      router.push(href);
      setIsLoading(false);
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      <Button mode="gold" additionalStyles="w-full" outline={outline}>
        {isLoading ? <Spinner backgroundColor={backgroundColor} /> : children}
      </Button>
    </Link>
  );
};

export default LoadingLink;
