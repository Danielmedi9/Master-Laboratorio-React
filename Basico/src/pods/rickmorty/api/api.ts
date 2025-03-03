import { CharacterEntity } from "./api.model";

export const getCharacter = async (): Promise<CharacterEntity[]> => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => data.results || []);
};
