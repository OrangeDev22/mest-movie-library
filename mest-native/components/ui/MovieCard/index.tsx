import React from "react";
import { Text, Image, View, TouchableOpacity, Pressable } from "react-native";
import { upperFirst } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { MovieType } from "@/__generated__/graphql";
// import MovieButtons from "../MovieButtons";

interface Props {
  movie: Pick<MovieType, "id" | "title" | "poster_path">;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("--on press");
    // navigation.navigate("MovieDetails", { movieId: movie.id });
  };

  return (
    <View className="w-full rounded-lg max-w-2xs card h-full max-h-[498px] card-compact bg-base-100 shadow-xl">
      <Pressable onPress={handlePress} className="h-full">
        <View className="w-full min-h-[450px] max-h-[450px] bg-neutral-500">
          <Image
            source={{ uri: movie.poster_path }}
            className="h-full w-full"
          />
        </View>

        <View className="card-body !py-2 justify-center px-4">
          <Text className="text-white card-title">
            {upperFirst(movie.title)}
          </Text>
        </View>
      </Pressable>
      {/* <MovieButtons id={movie.id} /> */}
    </View>
  );
};

export default MovieCard;
