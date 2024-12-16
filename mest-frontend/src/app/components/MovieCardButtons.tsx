"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Button from "./Button";
import { useMutation } from "@apollo/client";
import {
  CreateFavoriteMovieDocument,
  MovieType,
} from "@/__generated__/graphql";
import { twMerge } from "tailwind-merge";
import useFavoriteMoviesStore from "../stores/favoriteMoviesStores";
import { useEffect, useState } from "react";

const MovieCardButtons = ({ id }: { id: string }) => {
  const { user } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteMovies, addFavoriteMovie } = useFavoriteMoviesStore();
  const [createFavoriteMovie, { loading }] = useMutation(
    CreateFavoriteMovieDocument
  );

  useEffect(() => {
    if (!favoriteMovies) return;
    const movieIsFavorite = favoriteMovies.some(
      (movie) => movie.movieId === id
    );
    setIsFavorite(movieIsFavorite);
  }, [favoriteMovies]);

  const handleAddFavoriteMovie = async () => {
    try {
      const response = await createFavoriteMovie({
        variables: { createFavoriteMovieInput: { movieId: id } },
      });
      if (response.data?.createFavoriteMovie) {
        addFavoriteMovie(response.data.createFavoriteMovie);
      }
    } catch (error) {
      console.error("Error adding movie to favorites", error);
    }
  };

  if (!user) return null;

  return (
    <div className="mt-auto">
      {!isFavorite && (
        <Button
          className={twMerge(
            "w-full",
            loading ? "opacity-50 cursor-not-allowed" : ""
          )}
          onClick={async (e) => {
            e.stopPropagation();
            handleAddFavoriteMovie();
          }}
        >
          Add to favorites
        </Button>
      )}
      {isFavorite && (
        <Button className={twMerge("w-full")}>Remove from favorites</Button>
      )}
    </div>
  );
};

export default MovieCardButtons;
