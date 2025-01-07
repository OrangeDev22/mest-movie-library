import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface UserPictureProps {
  containerClassName?: string;
  className?: string;
  size: "sm" | "md";
}

const UserPicture = ({
  className,
  containerClassName,
  size = "md",
}: UserPictureProps) => {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div
        className={twMerge(
          "rounded-full cursor-pointer w-full h-full bg-gray-400 animate-pulse bg-gray-300",
          size === "md" ? "w-24 h-24" : "w-10 h-10",
          className
        )}
      />
    );

  return (
    <div
      className={twMerge(
        size === "md" ? "w-24 h-24" : "w-10 h-10",
        containerClassName
      )}
    >
      <Image
        src={user?.picture || "/default-avatar.png"}
        alt="user_profile_pic"
        className={twMerge(
          "rounded-full cursor-pointer w-full h-full",
          className
        )}
        width={0}
        height={0}
      />
    </div>
  );
};

export default UserPicture;
