import { Box, Input, Stack, Button, Select } from "@chakra-ui/react";
import FA from "components/Icons/FA";
import React from "react";

export default function FormView(props) {
  const {
    nombre,
    correo,
    setNombre,
    setCorreo,
    setPassword,
    saveUsuario,
    roles,
    rol,
    setRol,
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
        <Input
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.currentTarget.value)}
        />
      </Box>
      <Box py={"2"}>
        <Input
          type="password"
          placeholder="contraseña"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </Box>
      <Box py={"2"}>
        <Select
          placeholder="Rol"
          value={rol}
          onChange={(e) => setRol(e.currentTarget.value)}
        >
          {roles &&
            roles.length &&
            roles
              .sort((a, b) => a.activo - b.activo)
              .map((rol) => <option value={rol.id}>{rol.Rol}</option>)}
        </Select>
      </Box>
      <Box>
        <Button type="button" onClick={() => saveUsuario()}>
          <FA icon="save" />
          Guardar
        </Button>
      </Box>
    </Stack>
  );
}
