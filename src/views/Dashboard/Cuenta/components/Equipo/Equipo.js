import React, { useContext } from "react";
import { Box, Select, Stack, SimpleGrid } from "@chakra-ui/react";
import TableGeneral from "components/TableGeneral";
import { CuentaListContext } from "shared/context/cuenta";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

export default function Equipo({ equipo, libres, loadEquipo, formatoEquipo }) {
  const { cuentas } = useContext(CuentaListContext);
  return (
    <Stack>
      <Box py={"2"}>
        <Select
          placeholder="Cuenta"
          onChange={(e) => loadEquipo(e.currentTarget.value)}
        >
          {cuentas.map((cuenta) => (
            <option value={cuenta.id}>{cuenta.nombre}</option>
          ))}
        </Select>
      </Box>
      <Box>
        <SimpleGrid columns={2}>
          <Card __css={{}}>
            <CardBody>
              {libres && (
                <TableGeneral
                  headers={["agregar", "correo", "nombre"]}
                  rows={formatoEquipo(libres, true)}
                />
              )}
            </CardBody>
          </Card>
          <Card __css={{ borderLeft: "solid thin blue" }}>
            <CardBody>
              {equipo && (
                <TableGeneral
                  headers={["quitar", "correo", "nombre"]}
                  rows={formatoEquipo(equipo, false)}
                />
              )}
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
