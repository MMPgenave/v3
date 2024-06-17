"use client";

import { useState } from "react";

export const HeartButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleHover = () => {
    setIsHovering(!isHovering);
  };
  return (
    <i
      onMouseOver={handleHover}
      onMouseLeave={handleHover}
      className={`bi ${
        isHovering ? "bi-heart-fill" : " bi-heart"
      } cursor-pointer text-hot-pink text-2xl transition-all`}
    ></i>
  );
};
