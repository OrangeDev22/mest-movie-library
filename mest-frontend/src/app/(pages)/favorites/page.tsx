"use client";

import MovieList from "@/app/components/MovieList";
import useFavoriteMoviesStore from "@/app/stores/favoriteMoviesStores";

const Favorites = () => {
  const { favoriteMovies, isLoading } = useFavoriteMoviesStore();

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto p-4 md:p-0">
      <h2 className="font-bold text-xl">Favorite Movies</h2>
      <MovieList
        data={favoriteMovies.map((movie) => ({ ...movie, id: movie.movieId }))}
        loading={isLoading}
      />
    </div>
  );
};

export default Favorites;
