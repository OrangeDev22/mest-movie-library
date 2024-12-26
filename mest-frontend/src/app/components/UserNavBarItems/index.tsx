"use client";
import React from "react";
import Link from "next/link";
import UserPicture from "../UserPicture";
import { useUser } from "@auth0/nextjs-auth0/client";
import UserDropdown from "../UserDropdown";
import SiginButton from "../SiginButton";

function UserNavBarItems() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <UserDropdown>
            <UserPicture size="sm" />
          </UserDropdown>
        </div>
      ) : (
        <SiginButton />
      )}
    </>
  );
}

export default UserNavBarItems;
