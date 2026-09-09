import AllGames from "@/components/AllGames";
import { Home } from "@/components/Home";
import TopRatedGames from "@/components/TopRatedGames";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/index.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push(`/creation/creation`)}
        style={{
          backgroundColor: "#0042ea",
          padding: 10,
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Créer un jeu
        </Text>
      </Pressable>
      <Home />
      <TopRatedGames />
      <AllGames />
      <View></View>
    </View>
  );
}
