import { useDetailsGames } from "@/hooks/DetailGames";
import useUpdateGame from "@/hooks/Update";
import { defaultStyle, styleTextInput } from "@/styles/index.style";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Button, Text, TextInput, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function UpdateForm({ id }: { id: string }): JSX.Element {
  const { data: gameData, isLoading, isPending, isError } = useDetailsGames(id);

  const parsing = (data: string, min = 0, max = 100): number => {
    if (data === "") return min;
    const num = Number(data);
    if (isNaN(num)) return min;
    return Math.max(min, Math.min(max, num));
  };

  // Utilisation

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
            placeholder="Titre"
            placeholderTextColor="#ffffff"
          />
        )}
      />
      {/*Titre du jeu*/}
      <form.Field
        name="description"
        children={(field) => (
          <TextInput
            style={[
              styleTextInput.input,
              { height: 100, textAlignVertical: "top" },
            ]}
            value={field.state.value}
            onChangeText={(value) => field.handleChange(value)}
            multiline={true}
            // numberOfLines={4}
            placeholder="Description"
            placeholderTextColor="#ffffff"
          />
        )}
      />
      {/*Image url*/}
      <form.Field
        name="imageUrl"
        children={(field) => (
          <TextInput
            style={styleTextInput.input}
            value={field.state.value}
            onChangeText={(value) => field.handleChange(value)}
            placeholder="Image url"
            placeholderTextColor="#ffffff"
          />
        )}
      />

      {/*Note*/}
      <form.Field
        name="rating"
        children={(field) => (
          <TextInput
            style={styleTextInput.input}
            value={field.state.value.toString()}
            keyboardType="numeric"
            onChangeText={(value) => field.handleChange(parsing(value, 0, 100))}
            placeholder="Note"
            placeholderTextColor="#ffffff"
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
