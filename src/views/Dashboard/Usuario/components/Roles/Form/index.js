import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Form from "./Form";
import useAxios from "shared/hooks/useAxios";

export default function () {
  const url = "/v1/rol";
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { req } = useAxios();
  const toast = useToast();

  const setRol = (rol) => {
    setDescripcion(rol);
    setId(rol[0]);
  };

  const saveRol = async () => {
    try {
      const rsp = await req.post(url, {
        id,
        descripcion,
      });
      const new_rol = await rsp.data;

      toast({
        title: `Rol ${descripcion} registrado`,
        status: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      rol={descripcion}
      id={id}
      setId={setId}
      setRol={setRol}
      saveRol={saveRol}
    />
  );
}
