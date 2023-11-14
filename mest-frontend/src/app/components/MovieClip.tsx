// "use client";
import React from "react";
import { GetMovieClipsDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import YouTube from "react-youtube";
import { getClient } from "../../../lib/graphql-client";
import VideoPLayer from "./VideoPlayer";
import MovieClipsMenu from "./MovieClipsMenu";

async function MovieClip({
  id,
  selectedClip,
}: {
  id: string;
  selectedClip?: string;
}) {
  const { data, loading } = await getClient().query({
    query: GetMovieClipsDocument,
    variables: { getMovieClipsId: id },
  });

  if (loading) return <div>Loading....</div>;

  if (!data) {
    return null;
  }

  const { getMovieClips } = data;
  console.log(
    "--found it",
    getMovieClips.find((clip) => clip.id === selectedClip)?.key
  );

  return (
    <div className="max-w-screen-2xl mx-auto py-4 px-8 flex flex-col gap-4 w-full ">
      <div className="w-full h-full grow">
        <VideoPLayer
          videoId={
            getMovieClips.find((clip) => clip.id === selectedClip)?.key ||
            getMovieClips[0].key
          }
        />
      </div>

      <MovieClipsMenu clips={getMovieClips} movieId={id} />
    </div>
  );
}

export default MovieClip;
