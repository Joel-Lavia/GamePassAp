import UpdateScreen from "@/components/UpdateScreens";
import { styles } from "@/styles/index.style";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function ModifierGame(): JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <UpdateScreen id={id} />
    </View>
  );
}
