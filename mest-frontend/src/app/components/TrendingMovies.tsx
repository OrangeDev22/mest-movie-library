"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";
import { getClient } from "../../../lib/graphql-client";
import Link from "next/link";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { GetTrendingMoviesDocument } from "@/__generated__/graphql";

interface Props {
  page: number;
}

function TrendingMovies({ page }: Props) {
  const { data, loading } = useQuery(GetTrendingMoviesDocument, {
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
          data?.getTrendingMovies &&
          data.getTrendingMovies.map((movie) => (
            <div className="w-full h-full">
              <MovieCard
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                key={movie.id}
              />
            </div>
          ))}
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
    </div>
  );
}

export default TrendingMovies;
