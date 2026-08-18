import { useDetailsGames } from "@/hooks/DetailGames";
import useUpdateGame from "@/hooks/Update";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { View } from "react-native";
import { JSX } from "react/jsx-runtime";
import { updateGameSchema } from "./updateForm";

export default function UpdateScreen({ id }: { id: string }): JSX.Element {
  const { data: gameData } = useDetailsGames(id);

  const update = useUpdateGame(id);
  const form = useForm({
    defaultValues: {
      title: gameData?.title ?? "",
      description: gameData?.description ?? "",
      imageUrl: gameData?.imageUrl ?? "",
      rating: gameData?.rating ?? 0,
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: updateGameSchema,
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData();
      formData.append("title", value.title);
      formData.append("description", value.description);
      formData.append("imageUrl", value.imageUrl);
      formData.append("rating", value.rating.toString());
      update.mutate(formData);
    },
  });
  return <View></View>;
}
