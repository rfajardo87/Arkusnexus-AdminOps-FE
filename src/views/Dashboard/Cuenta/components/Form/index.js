import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import FormNode from "./Form";
import useAxios from "shared/hooks/useAxios";

export default function Form() {
  const [nombre, setNombre] = useState("");
  const [cliente, setCliente] = useState(0);
  const [responsable, setResponsable] = useState(0);
  const [responsables, setResponsables] = useState([]);
  const [clientes, setClientes] = useState([]);
  const { req } = useAxios();
  const toast = useToast();

  const loadClienteResponsable = async () => {
    try {
      const rspResponsable = await req.get("/v1/usuario/responsable");
      const responsables = await rspResponsable.data;
      const rspCliente = await req.get("/v1/usuario/cliente");
      const clientes = await rspCliente.data;
      setResponsables(responsables);
      setClientes(clientes);
    } catch (error) {
      console.log(error);
    }
  };

  const saveCuenta = async () => {
    try {
      const rsp = await req.post("/v1/cuenta", {
        nombre,
        cliente,
        responsable,
      });
      await rsp.data;
      toast({
        title: `Nueva cuenta ${nombre} registrada`,
        status: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!responsables.length && !clientes.length) {
      loadClienteResponsable();
    }
  }, []);

  return (
    <FormNode
      {...{
        nombre,
        setNombre,
        cliente,
        setCliente,
        clientes,
        responsable,
        setResponsable,
        responsables,
        saveCuenta,
      }}
    />
  );
}
