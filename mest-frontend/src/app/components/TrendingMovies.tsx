// "use client";
// import { useQuery } from "@apollo/client";
import React from "react";
import Link from "next/link";
import { GetTrendingMoviesDocument, MovieType } from "@/__generated__/graphql";
import MovieList from "./MovieList";
import { getClient } from "@/lib/client";
import PaginationComponent from "./PaginationComponent";
import { getSession } from "@auth0/nextjs-auth0";

interface Props {
  page: number;
}

async function TrendingMovies({ page }: Props) {
  const { data, error, loading } = await getClient().query({
    query: GetTrendingMoviesDocument,
    variables: { page },
    fetchPolicy: "network-only",
  });
  const session = await getSession();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto">
      <h2 className="font-bold text-xl">Trending Movies</h2>
      <PaginationComponent page={page} />
      <MovieList
        data={data?.getTrendingMovies as MovieType[]}
        loading={loading}
      />
      <PaginationComponent page={page} />
    </div>
  );
}

export default TrendingMovies;
