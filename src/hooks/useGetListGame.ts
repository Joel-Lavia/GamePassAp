import { useQuery } from "@tanstack/react-query";
import { listGamesRequest } from "../Services/api/game.api";

export function useGetListgames() {
  const games = useQuery({
    queryKey: ["games"],
    queryFn: listGamesRequest,
  });
  return games;
}
