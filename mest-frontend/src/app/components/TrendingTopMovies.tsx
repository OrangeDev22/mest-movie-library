import React from "react";
import { getClient } from "../../../lib/graphql-client";
import { GetTopTrendingMoviesDocument } from "@/__generated__/graphql";

async function TrendingTopMovies() {
  const { data, loading } = await getClient().query({
    query: GetTopTrendingMoviesDocument,
  });

  if (loading) return null;

  return (
    <div className="space-y-2">
      {data?.getTopTrendingMovies.map(({ title, poster_path, id }, i) => {
        return (
          <div
            className="rounded-lg overflow-hidden bg-base-100 max-w-xs flex gap-4 mx-2"
            key={id}
          >
            <h4 className="font-bold self-center text-2xl ml-4">{i + 1}</h4>
            <figure>
              <img src={poster_path} alt="movie_title" className="w-16 h-20" />
            </figure>
            <div className="flex-1 pt-4">{title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TrendingTopMovies;
