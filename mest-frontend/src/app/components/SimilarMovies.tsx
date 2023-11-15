"use client";
import { GetSimilarMoviesDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import React from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";

function SimilarMovies({ movieId }: { movieId: string }) {
  const { data, loading } = useQuery(GetSimilarMoviesDocument, {
    variables: { getSimilarMoviesId: movieId },
  });

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center w-full h-full px-4 md:p-0">
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

  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <h2 className="text-2xl font-bold mb-4 px-8">Similar Movies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center w-full h-full px-8">
        {!loading &&
          data?.getSimilarMovies &&
          data.getSimilarMovies.map((movie) => (
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
    </div>
  );
}

export default SimilarMovies;
