import { updateGame } from "@/Services/api/game.api";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateGame(id: string) {
  const game = useMutation({
    mutationFn: (data: FormData) => updateGame(id, data),
  });
  return game;
}
