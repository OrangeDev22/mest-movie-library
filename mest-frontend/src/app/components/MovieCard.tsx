import React from "react";
import { upperFirst } from "lodash";
import Link from "next/link";
import MovieCardButtons from "./MovieCardButtons";
import { MovieType } from "@/__generated__/graphql";

interface Props {
  movie: MovieType;
}

function MovieCard({ movie }: Props) {
  return (
    <div className="card card-compact max-w-2xs bg-base-100 shadow-xl aspect-[80/121] mx-auto">
      <Link
        href={`/movie/${movie.id}`}
        // className="card card-compact max-w-2xs bg-base-100 shadow-xl aspect-[80/121] mx-auto"
      >
        <div className="rounded-lg h-full flex flex-col">
          <figure className="w-full h-full bg-neutral-500">
            {movie.poster_path && (
              <img
                src={movie.poster_path}
                className="h-full w-full"
                alt={`${movie.title}_poster`}
              />
            )}
          </figure>
          <div className="card-body w-full mt-auto self-end">
            <h2 className="card-title truncate">{upperFirst(movie.title)}</h2>
          </div>
        </div>
      </Link>
      <MovieCardButtons id={movie.id} />
    </div>
  );
}

export default MovieCard;
