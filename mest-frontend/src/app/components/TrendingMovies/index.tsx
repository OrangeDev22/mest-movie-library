import React from "react";
import { GetTrendingMoviesDocument, MovieType } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { redirect } from "next/navigation";
import PaginationComponent from "../PaginationComponent";
import MovieList from "../MovieList";

interface Props {
  page: number;
}

async function TrendingMovies({ page }: Props) {
  if (page > 500) redirect("/");

  const { data, error, loading } = await getClient().query({
    query: GetTrendingMoviesDocument,
    variables: { page },
    fetchPolicy: "network-only",
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto">
      <h2 className="font-bold text-xl">Trending Movies</h2>
      <PaginationComponent
        page={page}
        paginationLimit={data.getTrendingMovies.total_pages}
      />
      <MovieList
        data={data?.getTrendingMovies.movies as MovieType[]}
        loading={loading}
      />
      <PaginationComponent
        page={page}
        paginationLimit={data.getTrendingMovies.total_pages}
      />
    </div>
  );
}

export default TrendingMovies;
