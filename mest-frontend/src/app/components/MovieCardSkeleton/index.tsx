import React from "react";
import { upperFirst } from "lodash";

function MovieCardSkeleton() {
  return (
    <div className="card card-compact max-w-xs bg-gray-400 shadow-xl aspect-[9/14] animate-pulse bg-gray-300 mx-auto">
      <div className="rounded-lg">
        <figure>{/* <img src={image} alt="movie_title" /> */}</figure>
        <div className="card-body">
          {/* <h2 className="card-title">{upperFirst(title)}</h2> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
