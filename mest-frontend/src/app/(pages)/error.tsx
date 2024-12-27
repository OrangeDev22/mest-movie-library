"use client";
import Link from "next/link";

export default function ErrorBoundary() {
  return (
    <div className="w-full text-lg text-center max-w-md mx-auto py-10">
      <span className="text-2xl font-bold">
        Ops! there was an error in our part
      </span>
      <br />
      please go back to the{" "}
      <Link href="/" className="text-cyan-500 font-bold">
        home
      </Link>{" "}
      page and try again
    </div>
  );
}
