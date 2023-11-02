import React from "react";
import { getClient } from "../../../lib/graphql-client";
import { GetTopTrendingMoviesDocument } from "@/__generated__/graphql";

async function TrendingTopMovies() {
  const { data, loading } = await getClient().query({
    query: GetTopTrendingMoviesDocument,
  });

  console.log("--loading", loading);
  return (
    <div>
      {data.getTopTrendingMovies.map((movie) => {
        return <div>{movie.title}</div>;
      })}
    </div>
  );
}

export default TrendingTopMovies;
