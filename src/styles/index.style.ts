import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1020",
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
    backgroundColor: "red",
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
    alignItems: "center",
  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderRadius: 9,
    color: "white",
  },
});
export const topRatedGames = StyleSheet.create({
  TopRatedGames: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "green",
  },
});
export const allGameStyle = StyleSheet.create({
  allGames: {
    // flex:1,
    // justifyContent: "center",
    // alignItems:"center"
    // flexDirection: "row",
    // backgroundColor: "#808080",
    justifyContent: "space-between",
    padding: 8,
  },
  images: {
    // width: "auto",
    // height: "70%",
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 7,
  },
  backround: {
    backgroundColor: "#242f46",
    borderRadius: 7,
  },
});
export const bouttonContent = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10, // optionnel : espacement entre les boutons
  },
});
