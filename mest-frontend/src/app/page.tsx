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
    <div className="bg-background-primary p-4 md:p-0">
      <div className="flex gap-4 justify-evenly flex-col md:flex-row">
        <div className="flex-grow my-4">
          <TrendingMovies page={page} />
        </div>
        <div>
          <TrendingTopMovies />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
