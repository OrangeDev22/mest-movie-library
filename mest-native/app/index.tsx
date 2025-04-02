import { GetTrendingMoviesDocument } from "@/__generated__/graphql";
import MovieCard from "@/components/ui/MovieCard";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { data } = useQuery(GetTrendingMoviesDocument, {
    variables: { page: 1 },
  });

  return (
    <SafeAreaView className="h-full">
      <ScrollView className="h-full">
        <View className="flex-1 items-center justify-center  bg-background-primary text-white gap-10">
          {data?.getTrendingMovies.movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
          <StatusBar style="dark" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
}
