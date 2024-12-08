"use client";
import React from "react";
import YouTube from "react-youtube";

function VideoPLayer({ videoId }: { videoId: string }) {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="w-full max-h-[40rem] bg-black aspect-video">
      <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
    </div>
  );
}

export default VideoPLayer;
