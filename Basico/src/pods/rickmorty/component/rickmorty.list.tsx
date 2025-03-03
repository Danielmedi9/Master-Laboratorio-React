import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { CharacterEntity } from "../rickmorty.vm";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes";

interface Props {
  character: CharacterEntity[];
}

export const ListRickMorty: React.FC<Props> = (props) => {
  const { character } = props;
  const [search, setSearch] = React.useState("");
  const [charFilter, setCharFilter] =
    React.useState<CharacterEntity[]>(character);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const debouncedSearch = React.useCallback(
    debounce((search: string) => {
      if (search) {
        const filtered = character.filter((char) =>
          char.name.toLowerCase().includes(search.toLowerCase())
        );
        setCharFilter(filtered);
      } else {
        setCharFilter(character);
      }
    }, 1000),
    [character]
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  return (
    <>
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search character..."
          onChange={handleSearch}
          value={search}
        />
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
          padding: 2,
        }}
      >
        {charFilter.map((char) => (
          <Card key={char.id}>
            <CardMedia
              sx={{ height: 190, objectFit: "cover" }}
              image={char.image}
              title={char.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {char.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Species: </strong>
                {char.species}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Status: </strong>
                {char.status}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component={Link}
                to={routes.rickmortydetail(char.id)}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
