import { useGetListgames } from "@/hooks/useGetListGame";
import { StarsIcone } from "@/icons/icons";
import { allGameStyle, defaultStyle } from "@/styles/index.style";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { JSX } from "react/jsx-runtime";

function listGames({ item }: { item: any }) {
  const games = item;
  return (
    <View style={allGameStyle.allGames}>
      <View>
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
    </View>
  );
}
export default function AllGames(): JSX.Element {
  const { data, isLoading, isEnabled } = useGetListgames();
  if (isLoading) {
    return (
      <View>
        <Text>Chargement des données ...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 10 }}>
      <FlatList
        data={data}
        renderItem={listGames}
        keyExtractor={(games) => games.id.toString()}
      />
    </SafeAreaView>
  );
}
