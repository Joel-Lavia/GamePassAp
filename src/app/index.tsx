import { Text, View } from "react-native";
import { useGetListgames } from "../hooks/useGetListGame";
import { styles } from "../styles/index.style";

export default function Index() {
  const { isPending, isError, data, error } = useGetListgames();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjours le monde.</Text>
    </View>
  );
}
