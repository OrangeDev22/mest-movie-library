import React from "react";
import { upperFirst } from "lodash";

function MovieCard() {
  return (
    <div className="max-w-xs overflow-hidden space-y-500 text-center rounded-lg m-4">
      <img
        src="https://cd929fm.com/wp-content/uploads/2023/07/MV5BY2VjMmU3MjItOTc5Ni00ZGY5LTg4ZGEtNzQ3OTNlZTM0ZGUzXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_.jpg"
        alt=""
        className="aspect-[9/14] rounded-lg"
      />
      <div className="font-bold">
        {upperFirst("they are taking the hobbits to Isengard!")}
      </div>
    </div>
  );
}

export default MovieCard;
