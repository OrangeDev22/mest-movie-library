"use client";

import { MovieType } from "@/__generated__/graphql";
import MovieList from "@/app/components/MovieList";
import PaginationComponent from "@/app/components/PaginationComponent";
import useFavoriteMoviesStore from "@/app/stores/favoriteMoviesStores";
import { useState } from "react";

const Favorites = () => {
  const { favoriteMovies, isLoading } = useFavoriteMoviesStore();
  const [pageState, setPageState] = useState(1);
  const moviesPerPage = 9;

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto p-4 md:p-0">
      <h2 className="font-bold text-xl">Favorite Movies</h2>
      <MovieList
        data={favoriteMovies.map((movie) => ({ ...movie, id: movie.movieId }))}
        loading={isLoading}
      />
      {/* <PaginationComponent page={page} /> */}
    </div>
  );
};

export default Favorites;
