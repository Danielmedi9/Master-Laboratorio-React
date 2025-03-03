import { MemberEntity } from "../organization.vm";

export const getOrganizationMembers = async (
  org: string
): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};
