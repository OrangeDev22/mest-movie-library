"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";
import { getClient } from "../../../lib/graphql-client";
import Link from "next/link";
import MovieCardSkeleton from "./MovieCardSkeleton";

const GetTrendingMovies = gql`
  query Query($page: Float!) {
    getTrendingMovies(page: $page) {
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
      genres {
        id
        name
      }
      popularity
      release_date
      video
      vote_average
      vote_count
    }
  }
`;

interface Props {
  page: number;
}

function TrendingMovies({ page }: Props) {
  const { data, loading } = useQuery(GetTrendingMovies, {
    variables: {
      page,
    },
  });
  console.log("--loading", loading);

  return (
    <div className="space-y-5 flex flex-col">
      <h2 className="font-bold text-xl">Trending Movies</h2>

      <div className="join self-center">
        <Link
          href={{
            pathname: "/",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className="join-item btn"
        >
          «
        </Link>
        <div className="join-item btn">Page {page}</div>
        <Link
          href={{
            pathname: "/",
            query: {
              page: page + 1,
            },
          }}
          className="join-item btn"
        >
          »
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center w-full h-full">
        {!loading &&
          data.getTrendingMovies.map((movie: any) => (
            <div className="w-full h-full">
              <MovieCard
                image={movie.poster_path}
                title={movie.title}
                key={movie.id}
              />
            </div>
          ))}
        {loading &&
          new Array(20).fill(null).map(() => {
            return (
              <div className="w-full h-full">
                <MovieCardSkeleton />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TrendingMovies;
