import React from "react";
import { getClient } from "../../../../lib/graphql-client";
import { GetOneMmovieDocument } from "@/__generated__/graphql";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";
import MovieClip from "@/app/components/MovieClip";

async function Movie({ params }: { params: { id: string } }) {
  const { data, loading } = await getClient().query({
    query: GetOneMmovieDocument,
    variables: { getOneMmovieId: params.id },
  });

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

  console.log("--data", data);
  return (
    <div>
      <MovieClip id={id} />
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
        studio={production_companies ? production_companies[0].name : ""}
      />
    </div>
  );
}

export default Movie;
