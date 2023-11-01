import React from "react";
import { upperFirst } from "lodash";

interface Props {
  image: string;
  title: string;
}

function MovieCard({ image, title }: Props) {
  return (
    <div className="card card-compact max-w-xs bg-base-100 shadow-xl aspect-[9/14] mx-auto">
      <div className="rounded-lg">
        <figure>
          <img src={image} alt="movie_title" className="w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{upperFirst(title)}</h2>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
