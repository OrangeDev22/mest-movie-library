"use client";
import React from "react";
import Link from "next/link";
import SiginButton from "./SiginButton";
import LogoutButton from "./LogoutButton";
import UserPicture from "./UserPicture";
import { useUser } from "@auth0/nextjs-auth0/client";

function UserNavBarItems() {
  const { user } = useUser();
  console.log("--user image", user?.picture);
  return (
    <>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          {/* <p>{user.name}</p> */}
          <Link href={"/user/settings"}>
            <UserPicture size="sm" />
          </Link>
          <LogoutButton />
        </div>
      ) : (
        <SiginButton />
      )}
    </>
  );
}

export default UserNavBarItems;
