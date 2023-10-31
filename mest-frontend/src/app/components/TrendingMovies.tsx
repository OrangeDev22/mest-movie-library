import { gql, useQuery } from "@apollo/client";
import React from "react";
import MovieCard from "./MovieCard";
import { getClient } from "../../../lib/graphql-client";
import Link from "next/link";

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

async function TrendingMovies({ page }: Props) {
  const { data } = await getClient().query({
    query: GetTrendingMovies,
    variables: { page },
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
