import { useQuery } from "@tanstack/react-query";
import { gameDetail } from "../Services/api/game.api";

export  function useDetailsGames(id: string) {
  const game = useQuery({
    queryKey: ["games", id],
    queryFn: () => gameDetail(id.toString()),
  });
  return game;
}
