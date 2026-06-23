import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjours le monde.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0754",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#16dc3a",
  },
});
