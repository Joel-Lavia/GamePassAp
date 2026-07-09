import { useGetListgames } from "@/hooks/useGetListGame";
import { StarsIcone } from "@/icons/icons";
import { allGameStyle, defaultStyle } from "@/styles/index.style";
import { Image, ScrollView, Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function AllGames(): JSX.Element {
  const { data, isLoading, isEnabled } = useGetListgames();
  return (
    <ScrollView style={allGameStyle.allGames}>
      {data?.map((games) => (
        <View
          key={games.id}
          style={{ backgroundColor: "red", borderRadius: 7, width: "100%" }}
        >
          <Image source={{ uri: games.imageUrl }} style={allGameStyle.images} />

          <View>
            <Text style={defaultStyle.title}>{games.title}</Text>
            <Text style={defaultStyle.text}>{games.description}</Text>
            <View style={defaultStyle.flex}>
              <StarsIcone />
              <Text style={defaultStyle.raking}>{games.rating}/100</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
