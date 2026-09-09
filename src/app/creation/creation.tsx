import CreateGames from "@/components/CreateGame";
import { styles } from "@/styles/index.style";
import { View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function Creation(): JSX.Element {
  return (
    <View style={styles.container}>
      <CreateGames />
    </View>
  );
}
