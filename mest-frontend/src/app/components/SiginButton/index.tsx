import Link from "next/link";
import React from "react";

function SiginButton() {
  return (
    <div className="flex gap-x-2 items-center">
      <Link
        className="bg-sky-400 px-3 py-2 rounded min-w-20"
        href={"/api/auth/login"}
      >
        Sign in
      </Link>
    </div>
  );
}

export default SiginButton;
