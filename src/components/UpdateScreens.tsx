import { View } from "react-native";
import UpdateForm from "./UpdateForm";

export default function UpdateScreen({ id }: { id: string }) {
  return (
    <View>
      <UpdateForm id={id} />
    </View>
  );
}
