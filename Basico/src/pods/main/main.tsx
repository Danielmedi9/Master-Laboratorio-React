import { switchRoutes } from "@/router/routes";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <div className="main">
      <h1>List</h1>
      <div>
        <Button variant="contained" component={Link} to={switchRoutes.list}>
          List Organization
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={switchRoutes.rickmorty}
        >
          List Rick and Morty
        </Button>
      </div>
    </div>
  );
};
