import React from "react";
import { getClient } from "../../../../lib/graphql-client";
import { GetOneMmovieDocument } from "@/__generated__/graphql";

async function Movie({ params }: { params: { id: string } }) {
  const { data } = await getClient().query({
    query: GetOneMmovieDocument,
    variables: { getOneMmovieId: params.id },
  });

  console.log("--data", data);
  return <div>Movie</div>;
}

export default Movie;
