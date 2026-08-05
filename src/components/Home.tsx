import { View } from "react-native";
import { JSX } from "react/jsx-runtime";
import { InputText } from "./InputText";
import { MostRaking } from "./MostRacking";

export function Home(): JSX.Element {
  return (
    <View style={{backgroundColor:"yellow"}}>
      <MostRaking />
      <InputText placeholder="chercher un jeu" />
    </View>
  );
}
