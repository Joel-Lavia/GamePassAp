import useCreate from "@/hooks/create";
import { defaultStyle, styleTextInput } from "@/styles/index.style";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { JSX } from "react/jsx-runtime";

export default function CreateGames(): JSX.Element {
  const create = useCreate();
  const router = useRouter();

  const parsing = (data: string, min = 0, max = 100): number => {
    if (data === "") return min;
    const num = Number(data);
    if (isNaN(num)) return min;
    return Math.max(min, Math.min(max, num));
  };

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      rating: 0,
    },
    validationLogic: revalidateLogic(),
    onSubmit: async ({ value }) => {
      await create.mutateAsync(value);
      router.push("/");
    },
  });

  return (
    <View>
      <Text style={defaultStyle.title}>Créer un jeu</Text>

      {/*Titre*/}
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

      {/*Description*/}
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
            placeholder="Description"
            placeholderTextColor="#ffffff"
          />
        )}
      />

      {/*Image URL*/}
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
            value={String(field.state.value)}
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
            onPress={() => form.handleSubmit()}
            title="Créer"
          />
        )}
      />

      {/*Message feedback*/}
      {create.isPending && <Text>Création en cours...</Text>}
      {create.isSuccess && <Text style={defaultStyle.text}>✅ Jeu créé !</Text>}
      {create.isError && <Text>❌ Erreur : {create.error?.message}</Text>}
    </View>
  );
}
