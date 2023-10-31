import React from "react";
import TrendingMovies from "./components/TrendingMovies";

function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  return (
    <div>
      HomePage
      <TrendingMovies page={page} />
    </div>
  );
}

export default HomePage;
