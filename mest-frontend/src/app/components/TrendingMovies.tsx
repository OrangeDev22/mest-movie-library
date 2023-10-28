"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";

function TrendingMovies() {
  const { data, loading, error } = useQuery(
    gql`
      query GetTrendingMovies {
        getTrendingMovies {
          id
          adult
          backdrop_path
          title
          original_language
          original_title
          overview
          poster_path
          media_type
          genre_ids
          popularity
          release_date
          video
          vote_average
          vote_count
        }
      }
    `,
    {}
  );

  console.log("==>movies", data);
  console.log("--error", error);
  return (
    <div className="space-y-5">
      <h2 className="font-bold text-xl">Trending Movies</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {new Array(20)
          .fill(() => null)
          .map((_) => {
            return <MovieCard />;
          })}
      </div>
    </div>
  );
}

export default TrendingMovies;
