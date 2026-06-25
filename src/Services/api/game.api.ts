import { api } from "./axios";

export async function listGamesRequest() {
  const games = await api.get("");
  return games.data;
}
