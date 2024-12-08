import React from "react";
import { GetOneMmovieDocument } from "@/__generated__/graphql";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";
import MovieClip from "@/app/components/MovieClip";
import SimilarMovies from "@/app/components/SimilarMovies";
import { getClient } from "../../../../../lib/graphql-client";

async function Movie({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data, loading } = await getClient().query({
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <MovieClip id={id} selectedClip={selectedClip} />
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
  );
}

export default Movie;
