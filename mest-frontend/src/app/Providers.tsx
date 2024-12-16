"use client";
import React from "react";
import FaboriteMoviesProvider from "./providers/FavoriteMoviesProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return <FaboriteMoviesProvider>{children}</FaboriteMoviesProvider>;
}

export default Providers;
