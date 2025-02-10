import { GetTrendingMoviesDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  const { data } = useQuery(GetTrendingMoviesDocument, {
    variables: { page: 1 },
  });

  console.log("--data", data);
  return (
    <View className="flex-1 items-center justify-center bg-cyan-300">
      {data?.getTrendingMovies.movies.map((movie) => (
        <Text className="text-center">{movie.title}</Text>
      ))}
      <StatusBar style="dark" />
    </View>
  );
}
