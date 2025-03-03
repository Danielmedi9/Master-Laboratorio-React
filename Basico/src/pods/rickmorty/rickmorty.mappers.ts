import * as am from "./api/api.model";
import * as vm from "./rickmorty.vm";

export const mapCharacterToVM = (
  character: am.CharacterEntity[]
): vm.CharacterEntity[] =>
  character.map((character) => ({
    id: character.id.toString(),
    name: character.name,
    status: character.status,
    species: character.species,
    image: character.image,
    gender: character.gender,
    type: character.type,
    created: character.created,
    origin: character.origin,
    location: character.location,
  }));
