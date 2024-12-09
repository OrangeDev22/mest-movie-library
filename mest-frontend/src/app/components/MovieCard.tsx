import React from "react";
import { upperFirst } from "lodash";
import Link from "next/link";
import MovieCardButtons from "./MovieCardButtons";

interface Props {
  id: string;
  image: string;
  title: string;
}

function MovieCard({ image, title, id }: Props) {
  return (
    <div className="card card-compact max-w-2xs bg-base-100 shadow-xl aspect-[80/121] mx-auto">
      <Link
        href={`/movie/${id}`}
        // className="card card-compact max-w-2xs bg-base-100 shadow-xl aspect-[80/121] mx-auto"
      >
        <div className="rounded-lg h-full flex flex-col">
          <figure className="w-full h-full bg-neutral-500">
            {image && (
              <img
                src={image}
                className="h-full w-full"
                alt={`${title}_poster`}
              />
            )}
          </figure>
          <div className="card-body w-full mt-auto self-end">
            <h2 className="card-title truncate">{upperFirst(title)}</h2>
          </div>
        </div>
      </Link>
      <MovieCardButtons />
    </div>
  );
}

export default MovieCard;
