"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation } from "@apollo/client";
import {
  CreateFavoriteMovieDocument,
  MovieType,
  RemoveFavoriteMovieDocument,
} from "@/__generated__/graphql";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import useFavoriteMoviesStore from "@/app/stores/favoriteMoviesStores";
import Button from "../Button";

const MovieButtons = ({
  id,
  className,
  rootClassName,
}: {
  id: string;
  className?: string;
  rootClassName?: string;
}) => {
  const { user } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteMovies, addFavoriteMovie, removeFavoriteMovie } =
    useFavoriteMoviesStore();
  const [createFavoriteMovie, { loading: isCreatingFavoriteMovie }] =
    useMutation(CreateFavoriteMovieDocument);
  const [deleteFavoriteMovie, { loading: isDeletingFavoriteMovie }] =
    useMutation(RemoveFavoriteMovieDocument);

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

  const handleRemoveMovie = async () => {
    try {
      const response = await deleteFavoriteMovie({
        variables: {
          removeFavoriteMovieId:
            favoriteMovies.find((movie) => movie.movieId === id)?.id || 0,
        },
      });

      if (response.data?.removeFavoriteMovie) {
        removeFavoriteMovie(response.data.removeFavoriteMovie.id);
      }
    } catch (error) {
      console.error("Error deleting favorite movie", error);
    }
  };

  if (!user) return null;

  return (
    <div className={twMerge("mt-auto", rootClassName)}>
      {!isFavorite && (
        <Button
          className={twMerge(
            "w-full",
            isCreatingFavoriteMovie ? "opacity-50 cursor-not-allowed" : "",
            className
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
        <Button
          className={twMerge(
            "w-full",
            isDeletingFavoriteMovie ? "opacity-50 cursor-not-allowed" : "",
            className
          )}
          onClick={async (e) => {
            e.stopPropagation();
            handleRemoveMovie();
          }}
        >
          Remove from favorites
        </Button>
      )}
    </div>
  );
};

export default MovieButtons;
