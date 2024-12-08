"use client";
import { GetSimilarMoviesDocument, MovieType } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import React from "react";
import MovieList from "./MovieList";

function SimilarMovies({ movieId }: { movieId: string }) {
  const { data, loading } = useQuery(GetSimilarMoviesDocument, {
    variables: { getSimilarMoviesId: movieId },
  });

  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <h2 className="text-2xl font-bold mb-4 px-8">Similar Movies</h2>

      <MovieList
        data={data?.getSimilarMovies as MovieType[]}
        loading={loading}
        rootClassName="gap-4 px-8"
      />
    </div>
  );
}

export default SimilarMovies;
