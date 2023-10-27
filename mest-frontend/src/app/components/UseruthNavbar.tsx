"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SiginButton from "./SiginButton";
import LogoutButton from "./LogoutButton";

function UseruthNavbar() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            {session.user.name} {session.user.email}
          </p>
          <img
            src={session.user.image || ""}
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
