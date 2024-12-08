import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useState } from "react";

const UserPicture = () => {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="rounded-full cursor-pointer w-full h-full bg-gray-400 animate-pulse bg-gray-300" />
    );

  return (
    <Image
      src={user?.picture || "/default-avatar.png"}
      alt="user_profile_pic"
      className="rounded-full cursor-pointer w-full h-full"
      width={0}
      height={0}
    />
  );
};

export default UserPicture;
