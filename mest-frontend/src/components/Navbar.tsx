"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
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
          <button
            onClick={async () => {
              await signOut({
                callbackUrl: "/",
              });
            }}
            className="bg-sky-400 px-3 py-2 rounded"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => signIn()}
            className="bg-sky-400 px-3 py-2 rounded"
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
