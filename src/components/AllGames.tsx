import { useGetListgames } from "@/hooks/useGetListGame";
import { StarsIcone } from "@/icons/icons";
import {
  allGameStyle,
  bouttonContent,
  defaultStyle,
} from "@/styles/index.style";
import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { JSX } from "react/jsx-runtime";

function listGames({ item }: { item: any }) {
  const games = item;
  return (
    <View style={allGameStyle.allGames}>
      {/* <Text>Test</Text> */}
      <View style={allGameStyle.backround}>
        <Image source={{ uri: games.imageUrl }} style={allGameStyle.images} />
        <View>
          <Text style={defaultStyle.title}>{games.title}</Text>
          <Text style={defaultStyle.text}>{games.description}</Text>
          <View style={defaultStyle.flex}>
            <StarsIcone />
            <Text style={defaultStyle.raking}>{games.raking}/100</Text>
          </View>
          {/*=============Bouton====================*/}
          <View style={bouttonContent.buttonContainer}>
            <Pressable
              onPress={() => router.push(`/details/${games.id}`)}
              style={{
                backgroundColor: "#2986cc",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text style={{ color: "white" }}>Voir</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push(`/modifier/${games.id}`)}
              style={{
                backgroundColor: "#d8ea00",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text style={{ color: "white" }}>Modifier</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push(`/details/${games.id}`)}
              style={{
                backgroundColor: "#db0000",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text style={{ color: "white" }}>Supprimer</Text>
            </Pressable>
            {/*=============Bouton====================*/}
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
