import { useGetListgames } from "@/hooks/useGetListGame";
import { StarsIcone } from "@/icons/icons";
import { defaultStyle, topRatedGames } from "@/styles/index.style";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function TopRatedGames(): JSX.Element {
  const { data, isPending, error, isError, isLoading } = useGetListgames();

  if (!data || isLoading) {
    return (
      <View>
        <Text>Chargement... </Text>
      </View>
    );
  }

  const jeux = data.sort((a, b) => b.rating - a.rating);
  const three = jeux.slice(1, 4);

  return (
    <View style={topRatedGames.TopRatedGames}>
      {three.map((games) => (
        <View key={games.id} style={{ alignItems: "center" }}>
          <Image
            source={{ uri: games.imageUrl }}
            style={{
              width: 125,
              height: 100,
              resizeMode: "cover",
              borderRadius: 7,
            }}
          />
          <Text style={defaultStyle.title}>{games.title}</Text>
          <View style={defaultStyle.flex}>
            <StarsIcone />
            <Text style={defaultStyle.raking}> {games.rating}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
