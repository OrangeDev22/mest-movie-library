import React from "react";
import { upperFirst } from "lodash";

interface Props {
  image: string;
  title: string;
}

function MovieCard({ image, title }: Props) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="movie_title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{upperFirst(title)}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
