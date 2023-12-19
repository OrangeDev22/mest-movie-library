"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import Link from "next/link";
import { GetTrendingMoviesDocument, MovieType } from "@/__generated__/graphql";
import MovieList from "./MovieList";

interface Props {
  page: number;
}

function TrendingMovies({ page }: Props) {
  const { data, loading, error } = useQuery(GetTrendingMoviesDocument, {
    variables: {
      page,
    },
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto">
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
      <MovieList
        data={data?.getTrendingMovies as MovieType[]}
        loading={loading}
        rootClassName="grid md:grid-cols-3 gap-8 items-center justify-items-center w-full h-full"
      />
    </div>
  );
}

export default TrendingMovies;
