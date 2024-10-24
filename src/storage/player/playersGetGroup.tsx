import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTS } from "./PlayerStorageDTS";

export async function playersGetGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`); // "getItem" pega dados do player e do group
    const players: PlayerStorageDTS[] = storage ? JSON.parse(storage) : []; // se tiver "conteudo" transfoma em objeto, caso contrario retorna um array vazio

    return players;
  } catch (error) {
    throw error;
  }
}
