import { switchRoutes } from "@/router/routes";
import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Button component={Link} to={switchRoutes.list}>
        Back to List
      </Button>
    </>
  );
};
