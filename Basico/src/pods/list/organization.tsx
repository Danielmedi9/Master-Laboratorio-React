import { OrganizationContext } from "@/core/context/organization";
import { Header } from "@/layout";
import { Button, Input } from "@mui/material";
import React, { useContext } from "react";
import { MemberEntity } from "./organization.vm";
import { getOrganizationMembers } from "./api/api";
import { ListOrganization } from "./componentes/organization.list";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organization, setOrganization } = useContext(OrganizationContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [membersPerPage] = React.useState(5);

  const fetchMembers = async (
    org: string,
    setMembers: (members: MemberEntity[]) => void
  ) => {
    const members = await getOrganizationMembers(org);
    setMembers(members);
  };

  React.useEffect(() => {
    fetchMembers(organization, setMembers);
  }, []);

  const handleSearch = () => {
    fetchMembers(organization, setMembers);
  };

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="search-container">
        <h2>Organization</h2>
        <div>
          <Input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Enter organization name"
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <ListOrganization
        currentMembers={currentMembers}
        currentPage={currentPage}
        membersPerPage={membersPerPage}
        paginate={paginate}
        totalMembers={members.length}
      />
    </>
  );
};
