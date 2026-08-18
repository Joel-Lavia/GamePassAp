import { styles } from "@/styles/index.style";
import { Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function ModifierGame(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Page de modification du jeu</Text>
    </View>
  );
}
