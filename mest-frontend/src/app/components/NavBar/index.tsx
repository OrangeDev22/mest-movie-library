import React from "react";
import Link from "next/link";
import SearchInput from "../SearchInput";
import UserNavBarItems from "../UserNavBarItems";

function Navbar() {
  return (
    <nav className="bg-navbar flex justify-between items-center py-3 px-3 lg:px-24 text-white gap-3 relative">
      <Link href="/" className="flex gap-1 items-center">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <div className="text-lg font-bold">MEST</div>
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
