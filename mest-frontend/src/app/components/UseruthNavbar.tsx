"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SiginButton from "./SiginButton";
import LogoutButton from "./LogoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

function UseruthNavbar() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;

  return (
    <>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>{user.name}</p>
          <img
            src={user.picture || ""}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <LogoutButton />
        </div>
      ) : (
        <SiginButton />
      )}
    </>
  );
}

export default UseruthNavbar;
