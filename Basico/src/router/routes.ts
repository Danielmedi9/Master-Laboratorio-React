import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  main: string;
  list: string;
  detail: string;
  rickmorty: string;
  rickmortydetail: string;
}

interface Routes extends Omit<SwitchRoutes, "detail" | "rickmortydetail"> {
  detail: (id: string) => string;
  rickmortydetail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  main: "/",
  list: "/list",
  detail: "/detail/:id",
  rickmorty: "/rickmorty",
  rickmortydetail: "/rickmortydetail/:id",
};

export const routes: Routes = {
  ...switchRoutes,
  detail: (id: string) => generatePath(switchRoutes.detail, { id }),
  rickmortydetail: (id: string) =>
    generatePath(switchRoutes.rickmortydetail, { id }),
};
