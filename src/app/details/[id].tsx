import DetailsScreen from "@/components/DetailScreen";
import { styles } from "@/styles/index.style";
import { View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function Detail(): JSX.Element {
  return (
    <View style={styles.container}>
      <DetailsScreen />
    </View>
  );
}
