import { gql, useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";
import { getClient } from "../../../lib/graphql-client";

const GetTrendingMovies = gql`
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
`;

async function TrendingMovies() {
  const { data } = await getClient().query({ query: GetTrendingMovies });

  return (
    <div className="space-y-5">
      <h2 className="font-bold text-xl">Trending Movies</h2>
      <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center">
        {data.getTrendingMovies.map((movie: any) => (
          <MovieCard
            image={movie.poster_path}
            title={movie.title}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;
