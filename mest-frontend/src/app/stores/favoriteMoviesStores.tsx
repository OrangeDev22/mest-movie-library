import { create } from "zustand";

type FavoriteMovie = {
  id: number;
  movieId: string;
  title: string;
  poster_path: string;
};

interface FavoriteMoviesState {
  favoriteMovies: Array<FavoriteMovie>;
  addFavoriteMovie: (movie: FavoriteMovie) => void;
  setFavoriteMovies: (movies: FavoriteMovie[]) => void;
  removeFavoriteMovie: (id: number) => void;
}

const useFavoriteMoviesStore = create<FavoriteMoviesState>((set) => ({
  favoriteMovies: [],
  setFavoriteMovies: (movies) => set({ favoriteMovies: movies }),

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
