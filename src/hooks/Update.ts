import { gameInterface } from "@/interfaces/game.interface";
import { updateGame } from "@/Services/api/game.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateGame(id: string) {
  const queryClient = useQueryClient();
  const game = useMutation({
    mutationFn: (data: Omit<gameInterface, "id" | "createdAt" | "updatedAt">) =>
      updateGame(id, data),
    onSuccess: () => {
      // Invalide le cache pour recharger les données
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
  return game;
}
