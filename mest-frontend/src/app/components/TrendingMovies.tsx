"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";

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
  return <div>TrendingMovies</div>;
}

export default TrendingMovies;
