import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../organization.vm";

interface Props {
  currentMembers: MemberEntity[];
  currentPage: number;
  membersPerPage: number;
  totalMembers: number;
  paginate: (pageNumber: number) => void;
}

export const ListOrganization: React.FC<Props> = (props) => {
  const {
    currentMembers,
    currentPage,
    membersPerPage,
    totalMembers,
    paginate,
  } = props;

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <img
                    src={member.avatar_url}
                    alt={member.login}
                    style={{ width: 50, borderRadius: "50%" }}
                  />
                </TableCell>
                <TableCell>{member.id}</TableCell>
                <TableCell>
                  <Link to={`/detail/${member.login}`}>{member.login}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <Button
          variant="outlined"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span>{currentPage}</span>
        <Button
          variant="outlined"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * membersPerPage >= totalMembers}
        >
          Next
        </Button>
      </div>
    </>
  );
};
