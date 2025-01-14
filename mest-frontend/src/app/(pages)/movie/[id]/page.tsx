import React from "react";
import {
  GetOneMmovieDocument,
  GetTrendingMoviesDocument,
} from "@/__generated__/graphql";
import { getClient } from "../../../../../lib/graphql-client";
import MovieClip from "@/app/components/MovieClip";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";
import SimilarMovies from "@/app/components/SimilarMovies";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function Movie({ params, searchParams }: Params) {
  const { data } = await getClient().query({
    query: GetOneMmovieDocument,
    variables: { getOneMmovieId: params.id },
  });

  const selectedClip =
    typeof searchParams.selectedClip === "string"
      ? searchParams.selectedClip
      : "";

  const {
    getOneMmovie: {
      id,
      title,
      poster_path,
      overview,
      original_title,
      genres,
      vote_average,
      release_date,
      production_companies,
    },
  } = data;
  console.log("--not found", data.getOneMmovie);
  if (!data.getOneMmovie) return notFound();

  return (
    <div className="flex flex-col space-y-4">
      <MovieClip id={id} selectedClip={selectedClip} />
      <div className="p-4 md:p-0">
        <MovieDetailsCard
          id={id}
          title={title}
          image={poster_path}
          details={overview}
          originalTitle={original_title}
          genres={
            genres?.map(({ name, id }) => {
              return { id: +id, name };
            }) || []
          }
          score={vote_average}
          released={release_date}
          studio={
            production_companies && production_companies.length > 0
              ? production_companies[0].name
              : ""
          }
        />
        <SimilarMovies movieId={id} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Params) {
  const { data } = await getClient().query({
    query: GetOneMmovieDocument,
    variables: { getOneMmovieId: params.id },
  });

  if (!data.getOneMmovie.title) {
    return {
      title: "Movie Not Found",
    };
  }

  return {
    title: data.getOneMmovie.title,
    description: `This is the page of movie ${data.getOneMmovie.title}`,
  };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: GetTrendingMoviesDocument,
    variables: { page: 1 },
  });

  return data?.getTrendingMovies?.movies.map((movie) => ({
    id: movie?.id,
  }));
}

export default Movie;
