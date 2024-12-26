"use client";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

type MovieClip = {
  __typename?: "MovieClip" | undefined;
  id: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at?: string | null | undefined;
};

function MovieClipsMenu({
  clips,
  movieId,
}: {
  clips: MovieClip[];
  movieId: string;
}) {
  if (clips.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-black overflow-y-auto">
      <div className="m-4 flex flex-col max-h-[40rem] md:max-h-full md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {clips.map((clip, index) => {
          return (
            <Link
              href={`/movie/${movieId}?selectedClip=${clip.id}`}
              key={clip.id}
              className={`break-words ${
                index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"
              } w-full  flex items-center p-3 gap-4 hover:bg-neutral-300 hover:text-neutral-600
              rounded-lg`}
            >
              <div className="font-bold">{index + 1}</div>
              <div className="w-full">
                <div className="pr-6 truncate">{clip.name}</div>
                <div className="text-neutral-500">
                  {dayjs(clip.published_at).format("MMMM DD YYYY")}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MovieClipsMenu;
