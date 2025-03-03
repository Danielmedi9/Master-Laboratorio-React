import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterEntity } from "./rickmorty.detail.vm";
import { switchRoutes } from "@/router/routes";

export const DetailRickMorty: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterEntity>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) =>
        console.error("Error fetching character details:", error)
      );
  }, [id]);

  if (!character) return null;

  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography variant="h4">{character.name}</Typography>
        <Typography variant="body1">
          <strong>Status:</strong> {character.status}
        </Typography>
        <Typography variant="body1">
          <strong>Species:</strong> {character.species}
        </Typography>
        <Typography variant="body1">
          <strong>Gender:</strong> {character.gender}
        </Typography>
        <Typography variant="body1">
          <strong>Origin:</strong> {character.origin.name}
        </Typography>
        <Typography variant="body1">
          <strong>Location:</strong> {character.location.name}
        </Typography>
      </CardContent>
      <Button
        sx={{ marginTop: 2 }}
        component={Link}
        to={switchRoutes.rickmorty}
      >
        Back to List
      </Button>
    </Card>
  );
};
