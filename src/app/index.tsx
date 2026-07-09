import AllGames from "@/components/AllGames";
import { Home } from "@/components/Home";
import TopRatedGames from "@/components/TopRatedGames";
import { View } from "react-native";
import { styles } from "../styles/index.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Home />
      <TopRatedGames />
      {/* <AllGames /> */}
    </View>
  );
}
