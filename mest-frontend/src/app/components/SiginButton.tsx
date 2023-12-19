// "use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

function SiginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex gap-x-2 items-center">
      <button
        className="bg-sky-400 px-3 py-2 rounded"
        onClick={() => loginWithRedirect()}
      >
        Sign in
      </button>
    </div>
  );
}

export default SiginButton;
