import { create } from "zustand";

interface FavoriteMoviesState {
  favoriteMovies: Array<{ id: string; movieId: number }>;
  fetchFavoriteMovies: () => Promise<void>;
  addFavoriteMovie: (movie: { id: string; movieId: number }) => void;
  removeFavoriteMovie: (id: string) => void;
}

const useFavoriteMoviesStore = create<FavoriteMoviesState>((set) => ({
  favoriteMovies: [],

  fetchFavoriteMovies: async () => {
    try {
      console.log("--should fetch movie here");
    } catch (error) {
      console.error("Error fetching favorite movies:", error);
    }
  },

  addFavoriteMovie: (movie) => {
    set((state) => ({
      favoriteMovies: [...state.favoriteMovies, movie],
    }));
  },

  removeFavoriteMovie: (id) => {
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((movie) => movie.id !== id),
    }));
  },
}));

export default useFavoriteMoviesStore;
