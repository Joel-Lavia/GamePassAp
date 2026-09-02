import { useDetailsGames } from "@/hooks/DetailGames";
import useUpdateGame from "@/hooks/Update";
import { defaultStyle, styleTextInput } from "@/styles/index.style";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Button, Text, TextInput, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function UpdateForm({ id }: { id: string }): JSX.Element {
  const { data: gameData, isLoading, isPending, isError } = useDetailsGames(id);

  const update = useUpdateGame(id);
  const form = useForm({
    defaultValues: {
      title: gameData?.title ?? "",
      description: gameData?.description ?? "",
      imageUrl: gameData?.imageUrl ?? "",
      rating: gameData?.rating ?? 0,
    },
    validationLogic: revalidateLogic(),
    // validators: {
    //   onDynamic: updateGameSchema,
    // },
    onSubmit: async ({ value }) => {
      // console.log("Value ====>", value);
      // const formData = new FormData();
      // formData.append("title", value.title);
      // formData.append("description", value.description);
      // formData.append("imageUrl", value.imageUrl);
      // formData.append("rating", value.rating.toString());
      const response = await update.mutateAsync(value);
      // console.log("Response ====>", response);
    },
  });

  if (isLoading || !gameData) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={defaultStyle.title}>Modifier un jeu</Text>
      {/*Titre du jeu*/}
      <form.Field
        name="title"
        children={(field) => (
          <TextInput
            style={styleTextInput.input}
            value={field.state.value}
            onChangeText={(value) => field.handleChange(value)}
          />
        )}
      />
      {/*Bouton de soumission*/}
      <form.Subscribe
        selector={(state) => state.canSubmit}
        children={(canSubmit) => (
          <Button
            disabled={!canSubmit}
            onPress={() => {
              form.handleSubmit();
              console.log(" handleSubmit");
            }}
            title="Modifier"
          />
        )}
      />
      {/*Message feed back*/}
      {update.isPending && <Text>Modification en cours...</Text>}
      {update.isSuccess && (
        <Text style={defaultStyle.text}>✅ Modification réussie !</Text>
      )}
      {update.isError && (
        <>
          <Text>❌ Erreur : {update.error?.message}</Text>
          {/* {console.log("Error ====>", update.error)} */}
        </>
      )}
    </View>
  );
}
