import React from "react";
import { twMerge } from "tailwind-merge";

type LoaderProps = {
  size?: "xs" | "sm" | "md" | "lg";
};

const Loader = ({ size = "md" }: LoaderProps) => {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const loaderClass = twMerge("loading", "loading-spinner", sizeClasses[size]);

  return (
    <div className="flex justify-center space-x-2">
      <span className={loaderClass}></span>
    </div>
  );
};

export default Loader;
