"use client";
import React from "react";
import { signIn } from "next-auth/react";
function SiginButton() {
  return (
    <div className="flex gap-x-2 items-center">
      <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
        Sign in
      </button>
    </div>
  );
}

export default SiginButton;
