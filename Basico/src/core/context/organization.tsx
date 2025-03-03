import React from "react";

interface OrganizationContextType {
  organization: string;
  setOrganization: (org: string) => void;
}

export const OrganizationContext = React.createContext<OrganizationContextType>(
  {
    organization: "lemoncode",
    setOrganization: () => {},
  }
);
