import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTS } from "./PlayerStorageDTS";
import { playersGetGroup } from "./playersGetGroup";
import { AppError } from "../../utils/AppError";

export async function playerAddGroup(
  newPlayer: PlayerStorageDTS,
  group: string
) {
  try {
    const storedPlayers = await playersGetGroup(group); // pega os dados do local storage
    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name // verifica se já tem alguem com esse nome
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Esse pessoa já está adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]); // add new player (se pá)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
