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
    <View className="w-full rounded-lg max-w-2xs card card-compact bg-base-100 shadow-xl">
      <Pressable onPress={handlePress}>
        <View
          className=""
          // style={{ flexDirection: "column", height: "100%" }}
        >
          <View className="w-full min-h-[450px] max-h-[450px] bg-neutral-500">
            <Image
              source={{ uri: movie.poster_path }}
              className="h-full w-full"
            />
          </View>
          {/* <View
          style={{
            width: "100%",
            minHeight: 450,
            backgroundColor: "#6c6c6c",
          }}
        >
          {movie.poster_path && (
            <Image
              source={{ uri: movie.poster_path }}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          )}
        </View> */}

          <Text className="text-white">{upperFirst(movie.title)}</Text>
        </View>
      </Pressable>
      {/* <MovieButtons id={movie.id} /> */}
    </View>
  );
};

export default MovieCard;
