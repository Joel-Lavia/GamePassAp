import { gameInterface } from "@/interfaces/game.interface";
import { api } from "./axios";

export async function listGamesRequest(): Promise<gameInterface[]> {
  const games = await api.get("");
  return games.data;
}
export async function gameDetail(id: string): Promise<gameInterface> {
  const game = await api.get(`${id}`);
  return game.data;
}
export async function updateGame(
  id: string,
  data: FormData,
): Promise<gameInterface> {
  const game = await api.put(`${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return game.data;
}
