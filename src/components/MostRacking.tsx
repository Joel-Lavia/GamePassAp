import { useGetListgames } from "@/hooks/useGetListGame";
import { defaultStyle, styleMonstRaking } from "@/styles/index.style";
import { Image, Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export function MostRaking(): JSX.Element {
  const { data, isPending, error, isError, isLoading } = useGetListgames();

  const mostVies = data?.reduce((max, datas) =>
    datas.rating > max.rating ? datas : max,
  );
  return (
    <View style={styleMonstRaking.container}>
      <Image
        source={{ uri: mostVies?.imageUrl }}
        style={{ width:"auto", height: 160 }}
      />
      <Text style={defaultStyle.text}>{mostVies?.title}</Text>
      <Text style={defaultStyle.text}>{mostVies?.description}</Text>
      <Text style={defaultStyle.raking}>{mostVies?.rating}/100</Text>
    </View>
  );
}
