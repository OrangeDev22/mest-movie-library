import { View, Text, ScrollView } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";
import MovieCard from "../MovieCard";

interface Props {
  data: any;
  loading?: boolean;
  rootClassName?: string;
}

const MovieList: React.FC<Props> = ({ data, loading, rootClassName }) => {
  console.log("--data", data);
  if (!data?.getTrendingMovies) return null;

  return (
    <ScrollView className="w-full h-full">
      <View
        className={twMerge(
          "grid mx-auto w-full sm:grid-cols-2 lg:grid-cols-3 items-center justify-center max-w-5xl h-full gap-8",
          rootClassName
        )}
      >
        {data?.getTrendingMovies?.movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MovieList;
