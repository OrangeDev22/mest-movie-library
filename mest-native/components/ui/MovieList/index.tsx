import { View, Text, ScrollView } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";
import MovieCard from "../MovieCard";

interface Props {
  movies: any;
  loading?: boolean;
  rootClassName?: string;
}

const MovieList: React.FC<Props> = ({ movies, loading, rootClassName }) => {
  if (!movies) return null;

  return (
    <ScrollView className="w-full h-full">
      <View
        className={twMerge(
          "grid mx-auto w-full sm:grid-cols-2 lg:grid-cols-3 items-center justify-center max-w-5xl h-full gap-8",
          rootClassName
        )}
      >
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MovieList;
