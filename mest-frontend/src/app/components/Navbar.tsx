import React from "react";
import Link from "next/link";
import UseruthNavbar from "./UseruthNavbar";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="bg-navbar flex justify-between items-center py-3 px-24 text-white">
      <Link href="/" className="w-full">
        <h1>NextGoogle</h1>
      </Link>
      <SearchInput />
      <div className="flex w-full mx-auto justify-end gap-4">
        {/* <input
          type="text"
          placeholder="Search Movie..."
          className="input input-bordered w-full max-w-xs"
        /> */}

        <UseruthNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
