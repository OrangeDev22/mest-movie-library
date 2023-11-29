"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
function SiginButton() {
  return (
    <div className="flex gap-x-2 items-center">
      <Link href="/api/auth/login" className="bg-sky-400 px-3 py-2 rounded">
        Sign in
      </Link>
    </div>
  );
}

export default SiginButton;
