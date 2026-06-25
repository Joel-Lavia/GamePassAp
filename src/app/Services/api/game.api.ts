import { api } from "./axios";

export async function listGames() {
  const games = await api.get("");
  return games.data;
}
