import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import UserNavBarItems from "./UseruthNavbar";

function Navbar() {
  return (
    <nav className="bg-navbar flex justify-between items-center py-3 px-3 lg:px-24 text-white gap-3">
      <Link href="/">
        <h1 className="font-bold">Home</h1>
      </Link>
      <div className="w-full self-center grow px-4">
        <SearchInput />
      </div>
      <div className="">
        <UserNavBarItems />
      </div>
    </nav>
  );
}

export default Navbar;
