import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import UserNavBarItems from "./UseruthNavbar";

function Navbar() {
  return (
    <nav className="bg-navbar flex justify-between items-center py-3 px-24 text-white">
      <Link href="/" className="w-full">
        <h1 className="font-bold">Home</h1>
      </Link>
      <SearchInput />
      <div className="flex w-full mx-auto justify-end gap-4">
        <UserNavBarItems />
      </div>
    </nav>
  );
}

export default Navbar;
