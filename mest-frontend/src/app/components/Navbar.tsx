import React from "react";
import Link from "next/link";
import UseruthNavbar from "./UseruthNavbar";

function Navbar() {
  return (
    <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
      <UseruthNavbar />
    </nav>
  );
}

export default Navbar;
