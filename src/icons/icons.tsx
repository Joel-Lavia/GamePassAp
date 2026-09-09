import { Search, Star } from "lucide-react-native";
import { View } from "react-native";
import { JSX } from "react/jsx-runtime";

export function StarsIcone(): JSX.Element {
  return (
    <View>
      <Star strokeWidth={1} size={19} color={"yellow"} fill={"yellow"} />
    </View>
  );
}

export function SearchIcone(): JSX.Element {
  return <Search strokeWidth={1} size={19} color={"white"} />;
}
