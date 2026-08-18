import { useDetailsGames } from "@/hooks/DetailGames";
import { StarsIcone } from "@/icons/icons";
import { allGameStyle, defaultStyle } from "@/styles/index.style";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function DetailsScreen(): JSX.Element {
  const { id } = useLocalSearchParams();
  const { data, isLoading, isError, error } = useDetailsGames(id as string);
  const router = useRouter();

  return (
    <View>
      <Image source={{ uri: data?.imageUrl }} style={allGameStyle.images} />
      <Text style={defaultStyle.title}>{data?.title}</Text>
      <View style={defaultStyle.flex}>
        <StarsIcone />
        <Text style={defaultStyle.raking}>{data?.rating}/100</Text>
      </View>
      <Text style={defaultStyle.text}>{data?.description}</Text>
      <Text style={defaultStyle.text}>
        {data?.createdAt
          ? new Date(data.createdAt).toLocaleDateString("fr-FR")
          : ""}
      </Text>
      <Text style={defaultStyle.text}>
        {data?.updatedAt
          ? new Date(data.updatedAt).toLocaleDateString("fr-FR")
          : ""}
      </Text>

      {/* <View style={defaultStyle.flex}>
        <Button title="Modifier" onPress={() => router.back()} />
        <Button title="Supprimer" onPress={() => router.back()} />
      </View> */}
      <Button title="retour" onPress={() => router.back()} />
    </View>
  );
}
