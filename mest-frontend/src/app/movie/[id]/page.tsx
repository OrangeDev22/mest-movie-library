import React from "react";
import { getClient } from "../../../../lib/graphql-client";
import { GetOneMmovieDocument } from "@/__generated__/graphql";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";

async function Movie({ params }: { params: { id: string } }) {
  const { data, loading } = await getClient().query({
    query: GetOneMmovieDocument,
    variables: { getOneMmovieId: params.id },
  });

  const {
    getOneMmovie: {
      title,
      poster_path,
      overview,
      original_title,
      genres,
      vote_average,
      release_date,
    },
  } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("--data", data);
  return (
    <div>
      <MovieDetailsCard
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
      />
    </div>
  );
}

export default Movie;
