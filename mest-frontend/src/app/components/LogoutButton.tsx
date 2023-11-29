"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

function LogoutButton() {
  return (
    <Link href="/api/auth/logout" className="bg-sky-400 px-3 py-2 rounded">
      Log out
    </Link>
  );
}

export default LogoutButton;
