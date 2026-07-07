import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0a28",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#16dc3a",
  },
});
export const styleMonstRaking = StyleSheet.create({
  container: {
    // flex: 1,
    // marginBottom: 50,
    // padding: 20,
    width: "100%",
  },
});
export const defaultStyle = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  raking: {
    color: "#fbcd40",
    fontSize: 15,
  },
  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "yellow", // Couleur de l'arrière-plan
    padding: 6, // Espace entre l'icône et le bord du fond
    borderRadius: 50, // Rend le fond parfaitement rond
    alignItems: "center", // Centre l'icône horizontalement
    justifyContent: "center", // Centre l'icône verticalement
  },
});
