import { playersGetGroup } from "./playersGetGroup";

export async function playersGetGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetGroup(group);
    const players = await storage.filter((player) => player.team === team); // verifica quem é do time (A ou B)

    return players;
  } catch (error) {
    throw error;
  }
}
