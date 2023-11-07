import React from "react";

type genre = {
  id: number;
  name: string;
};

interface Props {
  image: string;
  title: string;
  details: string;
  originalTitle: string;
  genres: genre[];
  score: number;
  released: string;
}

function MovieDetailsCard({
  image,
  title,
  details,
  originalTitle,
  genres,
  score,
  released,
}: Props) {
  return (
    <div className="flex gap-4">
      <img
        src={image}
        alt={`${title}_poster`}
        className="max-w-xs rounded-lg"
      />
      <div className="flex">
        <div>
          <h2 className="text-4xl font-bold">{title}</h2>
          <div>{originalTitle}</div>
          <p>{details}</p>
          <div>
            {`Genres:`}
            {genres.map((genre, index) => (
              <span key={genre.id} className="ml-1.5">{`${genre.name}${
                index !== genres.length - 1 ? "," : ""
              }`}</span>
            ))}
          </div>
          <div>{released}</div>
        </div>
        <div>Score: {score}</div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
