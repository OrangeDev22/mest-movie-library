"use client";
import React from "react";
import { GetMovieClipsDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import YouTube from "react-youtube";

function MovieClip({ id }: { id: string }) {
  console.log("-id", id);
  const { data, loading } = useQuery(GetMovieClipsDocument, {
    variables: { getMovieClipsId: id },
  });

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  if (loading) return <div>Loading....</div>;

  if (!data) {
    return null;
  }
  const {
    getMovieClips: {},
  } = data;

  return (
    <div className="max-w-7xl mx-auto aspect-video py-4 px-8">
      <YouTube
        videoId={data.getMovieClips[0].key}
        opts={opts}
        className="w-full h-full"
      />
    </div>
  );
}

export default MovieClip;
