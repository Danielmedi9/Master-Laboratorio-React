import { Header } from "@/layout";
import { CharacterEntity } from "./rickmorty.vm";
import React from "react";
import { ListRickMorty } from "./component/rickmorty.list";
import { getCharacter } from "./api/api";
import { mapCharacterToVM } from "./rickmorty.mappers";

export const RickMortyTable: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
    getCharacter().then((result) => setCharacters(mapCharacterToVM(result)));
  }, []);

  return (
    <>
      <Header />
      <ListRickMorty character={characters} />
    </>
  );
};
