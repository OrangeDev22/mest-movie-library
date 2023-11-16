"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";
import { getClient } from "../../../lib/graphql-client";
import Link from "next/link";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { GetTrendingMoviesDocument, MovieType } from "@/__generated__/graphql";
import Movie from "../movie/[id]/page";
import MovieList from "./MovieList";

interface Props {
  page: number;
}

function TrendingMovies({ page }: Props) {
  const { data, loading } = useQuery(GetTrendingMoviesDocument, {
    variables: {
      page,
    },
  });

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
      <MovieList
        data={data?.getTrendingMovies as MovieType[]}
        loading={loading}
        rootClassName="grid md:grid-cols-3 gap-4 items-center justify-items-center w-full h-full"
      />
    </div>
  );
}

export default TrendingMovies;
