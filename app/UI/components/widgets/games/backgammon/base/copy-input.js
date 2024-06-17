"use client";
import { Button } from "@/app/UI/components/base";
import { useRef, useState } from "react";
import { Input, InputGroup } from "reactstrap";

export function CopyInput({ value }) {
  const inputElement = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    inputElement.current.select();
    document.execCommand("copy");
    setHasCopied(true);
  };

  return (
    <div className="flex gap-2 justify-center">
      <input
        className="p-2 bg-primary outline-none text-secondary"
        value={value}
        readOnly
        onClick={copyToClipboard}
        ref={inputElement}
        style={{ cursor: "pointer" }}
      />
      <Button mode="success" size="sm" outline square onClick={copyToClipboard}>
        {hasCopied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
