import Link from "next/link";
import React from "react";
import Button from "../Button";

function SiginButtons() {
  return (
    <Link href={"/api/auth/login"} className="min-w-[54px] md:max-w-auto">
      <Button className="px-2 py-1 md:px-4 md:py-2 text-xs sm:text-sm md:text-base w-full">
        Sign in
      </Button>
    </Link>
  );
}

export default SiginButtons;
