"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button className="bg-sky-400 px-3 py-2 rounded" onClick={() => logout()}>
      Log out
    </button>
  );
}

export default LogoutButton;
