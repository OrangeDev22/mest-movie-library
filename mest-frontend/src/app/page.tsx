import React from "react";
import TrendingMovies from "./components/TrendingMovies";
import TrendingTopMovies from "./components/TrendingTopMovies";

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
      <div className="flex gap-4">
        <div className="flex-grow">
          <TrendingMovies page={page} />
        </div>
        <TrendingTopMovies />
      </div>
    </div>
  );
}

export default HomePage;
