import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION); // "getItem" pega dados
    const groups: string[] = storage ? JSON.parse(storage) : []; // se tiver "conteudo" transfoma em objeto, caso contrario retorna um array vazio

    return groups;
  } catch (error) {
    throw error;
  }
}
