import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll(); // pega os dados do local storage

    const groupAlreadyExists = storedGroups.includes(newGroup); // verifica se esse grupo já existe

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    } // é um "erro costumizado"

    const storage = JSON.stringify([...storedGroups, newGroup]);

    // o primeiro parametro: "GROUP_COLLECTION" é a chave, o segundo: "newGroup/storage" é o valor
    await AsyncStorage.setItem(GROUP_COLLECTION, storage); // "setItem" envia dados
  } catch (error) {
    throw error; // é um "erro generico"
  }
}
