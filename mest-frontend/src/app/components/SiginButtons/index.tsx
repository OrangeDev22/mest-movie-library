import Link from "next/link";
import React from "react";
import Button from "../Button";

function SiginButtons() {
  return (
    <Link href={"/api/auth/login"}>
      <Button>Sign in</Button>
    </Link>
  );
}

export default SiginButtons;
