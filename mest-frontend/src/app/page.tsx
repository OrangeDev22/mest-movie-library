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
    <div className="bg-background-primary">
      <div className="flex gap-4 justify-evenly">
        <div className="flex-grow my-4">
          <TrendingMovies page={page} />
        </div>
        <div className="mr-4">
          <TrendingTopMovies />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
