import React from "react";
import Link from "next/link";

function LogoutButton() {
  return (
    <Link className="bg-sky-400 px-3 py-2 rounded" href={"/api/auth/logout"}>
      Log out
    </Link>
  );
}

export default LogoutButton;
