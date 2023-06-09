import React, { useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import Table from "components/TableGeneral";
import FA from "components/Icons/FA";
import useAxios from "shared/hooks/useAxios";

export default function Usuarios() {
  const [data, setData] = useState([]);
  const { req } = useAxios();
  const toast = useToast();

  const reqUsuarios = async () => {
    try {
      const rsp = await req.get("/v1/usuario");
      const usuarios = await rsp.data;
      setData(usuarios);
    } catch (error) {
      console.log(error);
    }
  };

  const delUsuario = async (id, correo) => {
    try {
      const rsp = await req.delete(`/v1/usuario/${id}`);
      const data = await rsp.data;
      toast({
        title: `${correo} inhabilitado`,
        variant: "left-accent",
        status: "error",
        isClosable: true,
      });
    } catch (error) {
      console.log(data);
    }
  };

  const usuarioFormato = (usuarios) =>
    usuarios.map((usuario) => ({
      ...usuario,
      editar: (
        <Button variant="solid" size="sm">
          <FA icon={"pen-to-square"} />
        </Button>
      ),
      inhabilitar: (
        <Button
          type="button"
          variant="solid"
          size="sm"
          onClick={() => delUsuario(usuario.id, usuario.correo)}
          disabled={!usuario.activo}
        >
          <FA icon="user-slash" style={{ color: "rgba(255,128,128,.87)" }} />
        </Button>
      ),
    }));

  useEffect(() => {
    if (!data.length) {
      reqUsuarios();
    }
  }, []);

  return (
    <Table
      headers={["nombre", "correo", "editar", "inhabilitar"]}
      rows={usuarioFormato(data)}
    ></Table>
  );
}
