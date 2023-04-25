import React, { useEffect, useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import Lista from "./Lista";
import FA from "components/Icons/FA";
import useAxios from "shared/hooks/useAxios";

export default function () {
  const url = "/v1/rol";
  const headers = ["id", "Rol", "editar", "cancelar"];
  const [roles, setRoles] = useState([]);

  const { req } = useAxios();
  const toast = useToast();

  const loadRoles = async () => {
    try {
      const rsp = await req.get(url);
      const roles = await rsp.data;

      setRoles(roles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!roles.length) {
      loadRoles();
    }
  }, []);

  const cancelRol = async (id, rol) => {
    try {
      const rsp = await req.delete(`${url}/${id}`);
      const cancel_rol = rsp.data;
      toast({
        title: `Rol ${rol} cancelado`,
        status: "error",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formatoRowRol = (rows) =>
    rows.map((row) => ({
      ...row,
      editar: (
        <Button>
          <FA icon="pen-to-square" />
        </Button>
      ),
      cancelar: (
        <Button onClick={() => cancelRol(row.id, row.Rol)} disabled={!row.activo}>
          <FA icon="user-slash" style={{ color: "rgba(255,128,128,0.87)" }} />
        </Button>
      ),
    }));
  return <Lista headers={headers} rows={formatoRowRol(roles)} />;
}
