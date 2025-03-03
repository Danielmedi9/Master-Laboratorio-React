import React from "react";
import { AppRouter } from "./router/app.router";
import { Container } from "@mui/material";

export const App: React.FC = () => {
  return (
    <Container>
      <AppRouter />
    </Container>
  );
};
