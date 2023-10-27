"use client";
import React from "react";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
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
  );
}

export default LogoutButton;
