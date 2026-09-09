import { createGame } from "@/Services/api/game.api";
import { QueryClient, useMutation } from "@tanstack/react-query";

export default function UseCreate() {
  const mutation = useMutation({
    mutationFn: createGame,
    onSuccess: () =>
      new QueryClient().invalidateQueries({ queryKey: ["games"] }),
  });

  return mutation;
}
