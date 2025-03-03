export interface CharacterEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  type: string;
  created: string;
  origin: { name: string };
  location: { name: string };
}
