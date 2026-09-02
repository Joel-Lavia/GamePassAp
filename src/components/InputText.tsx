import { defaultStyle } from "@/styles/index.style";
import { TextInput, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export function InputText({
  placeholder,
}: {
  placeholder?: string;
}): JSX.Element {
  return (
    <View>
      <TextInput
        style={defaultStyle.inputText}
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor={"white"}
      ></TextInput>
    </View>
  );
}
