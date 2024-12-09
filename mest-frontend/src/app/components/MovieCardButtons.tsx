"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Button from "./Button";

const MovieCardButtons = () => {
  const { user } = useUser();

  if (!user) return null;
  return (
    <div className="mt-auto">
      <Button
        className="w-full"
        onClick={(e) => {
          e.stopPropagation();
          console.log("hola");
        }}
      >
        Add to favorites
      </Button>
    </div>
  );
};

export default MovieCardButtons;
