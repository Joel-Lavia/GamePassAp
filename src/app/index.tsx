import { Text, View } from "react-native";
import { styles } from "./styles/index.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjours le monde.</Text>
    </View>
  );
}
