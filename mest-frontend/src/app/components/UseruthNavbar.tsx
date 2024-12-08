import React from "react";
import Link from "next/link";
import SiginButton from "./SiginButton";
import LogoutButton from "./LogoutButton";
import { getSession } from "@auth0/nextjs-auth0";

async function UserNavBarItems() {
  const session = await getSession();

  return (
    <>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>{session?.user.name}</p>
          <Link href={"user/settings"}>
            <img
              src={session.user.picture || ""}
              alt="user_profile_pic"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
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
