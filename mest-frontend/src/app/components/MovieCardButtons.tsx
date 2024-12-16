"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Button from "./Button";
import { useMutation } from "@apollo/client";
import {
  CreateFavoriteMovieDocument,
  MovieType,
} from "@/__generated__/graphql";
import { twMerge } from "tailwind-merge";

const MovieCardButtons = ({ id }: { id: string }) => {
  const { user } = useUser();
  const [createFavoriteMovie, { loading }] = useMutation(
    CreateFavoriteMovieDocument
  );

  if (!user) return null;

  return (
    <div className="mt-auto">
      <Button
        className={twMerge(
          "w-full",
          loading ? "opacity-50 cursor-not-allowed" : ""
        )}
        onClick={async (e) => {
          e.stopPropagation();
          try {
            await createFavoriteMovie({
              variables: { createFavoriteMovieInput: { movieId: id } },
            });
          } catch (error) {
            console.error("Error adding movie to favorites", error);
          }
        }}
      >
        Add to favorites
      </Button>
    </div>
  );
};

export default MovieCardButtons;
