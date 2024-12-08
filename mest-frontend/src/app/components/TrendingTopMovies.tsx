import React from "react";
import { getClient } from "../../../lib/graphql-client";
import { GetTopTrendingMoviesDocument } from "@/__generated__/graphql";
import Link from "next/link";

async function TrendingTopMovies() {
  const { data, loading } = await getClient().query({
    query: GetTopTrendingMoviesDocument,
  });

  if (loading) return null;

  return (
    <div className="flex-grow my-4">
      <h3 className="font-bold text-xl">Top Movies</h3>
      <div className="mt-4 space-y-3 ">
        {data?.getTopTrendingMovies.map(({ title, poster_path, id }, i) => {
          return (
            <Link
              className="rounded-lg overflow-hidden bg-base-100 w-full md:max-w-xs flex gap-4 mx-2 items-center pr-4"
              key={id}
              href={`/movie/${id}`}
            >
              <h4 className="font-bold self-center text-2xl ml-4">{i + 1}</h4>
              <figure>
                <img
                  src={poster_path}
                  alt="movie_poster"
                  className="w-16 h-20"
                />
              </figure>
              <div className="flex-1 truncate">{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingTopMovies;
