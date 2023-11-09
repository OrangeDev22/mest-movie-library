import dayjs from "dayjs";
import React from "react";

type genre = {
  id: number;
  name: string;
};

interface Props {
  id: string;
  image: string;
  title: string;
  details: string;
  originalTitle: string;
  genres: genre[];
  score: number;
  released: string;
  studio: string;
}

function MovieDetailsCard({
  image,
  title,
  details,
  originalTitle,
  genres,
  score,
  released,
  studio,
}: Props) {
  const filledStars = Math.floor(score / 2);

  return (
    <div className="flex gap-4 m-2 px-2 py-4">
      <img
        src={image}
        alt={`${title}_poster`}
        className="max-w-[10rem] h-48 rounded-lg"
      />

      <div className="flex flex-col md:flex-row">
        <div className="space-y-4 w-3/4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div>{originalTitle}</div>
          <p className="text-sm">{details}</p>
          <div className="text-neutral-500">
            {`Genres:`}
            {genres.map((genre, index) => (
              <span key={genre.id} className="ml-1.5 text-neutral-400">{`${
                genre.name
              }${index !== genres.length - 1 ? "," : ""}`}</span>
            ))}
            <div className="text-neutral-500">
              Released:{" "}
              <span className="text-neutral-400">
                {dayjs(released).format("MMMM DD YYYY")}
              </span>
            </div>
            <div className="text-neutral-500">
              Studio: <span className="text-neutral-400">{studio}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col grow bg-neutral-200 h-20 rounded-lg p-2 space-y-1 text-center">
          <div className="font-bold text-violet-500">Score: {score} / 10</div>

          <div className="flex items-center space-x-1 bg-black p-1 rounded-lg justify-center">
            {new Array(5).fill(null).map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < filledStars ? "text-yellow-500" : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
