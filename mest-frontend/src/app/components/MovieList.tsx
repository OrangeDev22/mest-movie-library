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
  data: MovieType[];
  loading: boolean;
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
        <div className="w-full h-full">
          <MovieCard
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            key={movie.id}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
