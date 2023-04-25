import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

export default function TableGeneral({ headers = undefined, rows }) {
  return (
    <TableContainer>
      <Table variant="simple">
        {headers && (
          <Thead>
            <Tr>
              {headers.map((header) => (
                <Th style={{ textTransform: "capitalize" }} key={header}>
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
        )}
        <Tbody>
          {rows.map((row) => (
            <Tr key={row["id"]}>
              {headers.map((header) => (
                <Td key={`${row["id"]}_${header}`}>{row[header]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
