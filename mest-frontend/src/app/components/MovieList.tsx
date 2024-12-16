import { GetSimilarMoviesQuery, MovieType } from "@/__generated__/graphql";
import React from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";
import { twMerge } from "tailwind-merge";

function MovieList({
  data,
  loading,
  rootClassName,
}: {
  data: Pick<MovieType, "id" | "title" | "poster_path">[];
  loading?: boolean;
  rootClassName?: string;
}) {
  if (loading) {
    return (
      <div className={rootClassName}>
        {loading &&
          !data &&
          new Array(20).fill(null).map(() => {
            return (
              <div className="w-full h-full">
                <MovieCardSkeleton />
              </div>
            );
          })}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div
      className={twMerge(
        "grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center w-full h-full gap-8",
        rootClassName
      )}
    >
      {data.map((movie) => (
        <div className="w-full h-full" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
