import React from "react";
import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";
import FA from "components/Icons/FA";

export default function FormNode(props) {
  const {
    nombre,
    setNombre,
    cliente,
    clientes,
    setCliente,
    responsable,
    responsables,
    setResponsable,
    saveCuenta,
  } = props;

  return (
    <Stack>
      <Box py={"2"}>
        <Input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.currentTarget.value)}
        />
      </Box>
      <Box py={"2"}>
        <Select
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.currentTarget.value)}
        >
          {clientes &&
            clientes.length &&
            clientes.map((cliente) => (
              <option value={cliente.id}>{cliente.nombre}</option>
            ))}
        </Select>
      </Box>
      <Box py={"2"}>
        <Select
          placeholder="Responsable"
          value={responsable}
          onChange={(e) => setResponsable(e.currentTarget.value)}
        >
          {responsables &&
            responsables.length &&
            responsables.map((responsable) => (
              <option value={responsable.id}>{responsable.nombre}</option>
            ))}
        </Select>
      </Box>
      <Box py={"2"}>
        <Button variant="solid" colorScheme="blue" onClick={() => saveCuenta()}>
          <FA icon="save" />
          Guardar
        </Button>
      </Box>
    </Stack>
  );
}
