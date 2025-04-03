import { GetTrendingMoviesDocument } from "@/__generated__/graphql";
import MovieCard from "@/components/ui/MovieCard";
import MovieList from "@/components/ui/MovieList";
import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { data } = useQuery(GetTrendingMoviesDocument, {
    variables: { page: 1 },
  });

  return (
    <SafeAreaView className="h-full  bg-background-primary">
      <View className="items-center p-4 justify-center   text-white">
        <MovieList data={data} />
        <StatusBar style="dark" />
      </View>

      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
}
