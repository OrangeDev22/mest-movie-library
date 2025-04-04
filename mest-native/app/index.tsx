import { GetTrendingMoviesDocument, MovieType } from "@/__generated__/graphql";
import MovieCard from "@/components/ui/MovieCard";
import MovieList from "@/components/ui/MovieList";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const { data, loading, fetchMore, error } = useQuery(
    GetTrendingMoviesDocument,
    {
      variables: { page },
    }
  );

  useEffect(() => {
    if (data?.getTrendingMovies && data?.getTrendingMovies.movies.length > 0) {
      const newMovies = data.getTrendingMovies.movies;

      const uniqueMovies = [
        ...movies,
        ...newMovies.filter(
          (newMovie) => !movies.some((movie) => movie.id === newMovie.id)
        ),
      ];

      setMovies(uniqueMovies);
    }
  }, [data]);

  const loadingMoreMovies = () => {
    if (!loading) {
      fetchMore({
        variables: { page: page + 1 },
      });
      setPage(page + 1);
    }
  };

  return (
    <SafeAreaView className="h-full w-full bg-background-primary">
      <View className="items-center py-4 justify-center  h-full text-white w-full">
        <MovieList movies={movies} />
        <Button
          onPress={() => loadingMoreMovies()}
          title={loading ? "loading..." : "Test loading more"}
        />

        <StatusBar style="dark" />
      </View>

      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
}
