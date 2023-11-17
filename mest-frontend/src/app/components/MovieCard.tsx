import React from "react";
import { upperFirst } from "lodash";
import Link from "next/link";

interface Props {
  id: string;
  image: string;
  title: string;
}

function MovieCard({ image, title, id }: Props) {
  return (
    <Link
      href={`/movie/${id}`}
      className="card card-compact max-w-xs bg-base-100 shadow-xl aspect-[9/14] mx-auto"
    >
      <div className="rounded-lg h-full flex flex-col">
        <figure className="w-full h-full">
          <img src={image} alt="movie_title" className="w-full h-full" />
        </figure>
        <div className="card-body w-full mt-auto self-end">
          <h2 className="card-title truncate">{upperFirst(title)}</h2>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
