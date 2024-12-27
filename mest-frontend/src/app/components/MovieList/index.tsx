import { MovieType } from "@/__generated__/graphql";
import React from "react";
import { twMerge } from "tailwind-merge";
import MovieCard from "../MovieCard";
import MovieCardSkeleton from "../MovieCardSkeleton";
import Link from "next/link";

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
      <div
        className={twMerge(
          "grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center w-full h-full gap-8",
          rootClassName
        )}
      >
        {new Array(20).fill(null).map(() => {
          return (
            <div className="w-full h-full">
              <MovieCardSkeleton />
            </div>
          );
        })}
      </div>
    );
  }

  if (!data || data?.length === 0) {
    return (
      <div className="w-full text-lg text-center max-w-md mx-auto py-10">
        You currently don't have any favorite movies, go to the{" "}
        <Link href="/" className="text-cyan-500 font-bold">
          home
        </Link>{" "}
        page and look for your favorite movies!
      </div>
    );
  }

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
