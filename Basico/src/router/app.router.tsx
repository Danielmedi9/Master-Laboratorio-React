import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListScene } from "@/scenes/organization.scene";
import { DetailScene } from "@/scenes/detail.scene";
import { switchRoutes } from "./routes";
import { MainScene } from "@/scenes/main.scene";
import { OrganizationContext } from "@/core/context/organization";
import { RickMortyScene } from "@/scenes/rickmorty.scene";
import { RickMortyDetailScene } from "@/scenes/rickmortydetail.scene";

export const AppRouter = () => {
  const [organization, setOrganization] = useState("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      <Router>
        <Routes>
          <Route path={switchRoutes.main} element={<MainScene />} />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
          <Route path={switchRoutes.rickmorty} element={<RickMortyScene />} />
          <Route
            path={switchRoutes.rickmortydetail}
            element={<RickMortyDetailScene />}
          />
        </Routes>
      </Router>
    </OrganizationContext.Provider>
  );
};
