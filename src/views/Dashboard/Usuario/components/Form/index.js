import React, { useEffect, useState } from "react";
import FormView from "./Form";
import useAxios from "shared/hooks/useAxios";
import { useToast } from "@chakra-ui/react";

export default function Form() {
  const url = "/v1/usuario";
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState(0);
  const [roles, setRoles] = useState([]);
  const { req } = useAxios();
  const toast = useToast();

  const saveUsuario = async () => {
    try {
      const rsp = await req.post(url, {
        nombre,
        correo,
        password,
        rol,
      });
      const data = await rsp.data;

      toast({
        title: `Usuario ${nombre} registrado`,
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Ocurrio un error",
        status: "error",
      });
      console.log(error);
    }
  };

  const loadRoles = async () => {
    try {
      const rsp = await req.get("/v1/rol");
      const roles = await rsp.data;

      setRoles(roles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!roles.length) {
      loadRoles();
    }
  }, []);

  return (
    <FormView
      nombre={nombre}
      correo={correo}
      rol={rol}
      setNombre={setNombre}
      setCorreo={setCorreo}
      setPassword={setPassword}
      setRol={setRol}
      saveUsuario={saveUsuario}
      roles={roles}
    />
  );
}
