import { Home } from "@/components/Home";
import { Text, View } from "react-native";
import { useGetListgames } from "../hooks/useGetListGame";
import { styles } from "../styles/index.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
