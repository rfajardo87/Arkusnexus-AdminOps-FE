import React from "react";
import { Input, Stack, Box, Button } from "@chakra-ui/react";
import FA from "components/Icons/FA";

export default function Form({ rol, id, setRol, setId, saveRol }) {
  return (
    <Stack>
      <Box py={"2"}>
        <Input
          placeholder="Rol"
          value={rol}
          onChange={(e) => setRol(e.currentTarget.value)}
        />
      </Box>
      <Box py={"2"}>
        <Input
          placeholder="Id Rol"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
      </Box>
      <Box py={"2"}>
        <Button colorScheme="blue" onClick={() => saveRol()}>
          <FA icon="save" style={{ paddingRight: 3 }} />
          Guardar
        </Button>
      </Box>
    </Stack>
  );
}
