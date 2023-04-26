import React, { useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import Equipo from "./Equipo";
import FA from "components/Icons/FA";
import useAxios from "shared/hooks/useAxios";

export default function () {
  const toast = useToast();
  const { req } = useAxios();
  const [idCuenta, setIdCuenta] = useState();
  const [equipo, setEquipo] = useState([]);
  const [libres, setLibres] = useState([]);

  const loadEquipo = async (id) => {
    try {
      const rsp = await req.get(`/v1/equipo/${id}`);
      setEquipo(await rsp.data.equipo);
      const libres = await req.get(`/v1/usuario/libre`);
      setLibres(
        await libres.data.map((libre) => ({
          Usuario: libre,
        }))
      );
      setIdCuenta(id);
    } catch (error) {
      toast({
        status: "error",
        title: "Error al cargar" + error,
      });
    }
  };

  const actionUsuario = async (id, nombre, tipo) => {
    try {
      const equipo_nuevo = await (tipo ? req.post : req.delete)(
        `/v1/equipo/${idCuenta}/${id}`
      );
      await equipo_nuevo.data;
      toast({
        status: tipo ? "success" : "info",
        title: `Usuario ${nombre} ${
          tipo ? "agregado" : "restringido"
        } a la cuenta`,
      });
    } catch (error) {
      toast({
        status: "error",
        title: `No se pudo agregar ${nombre} a la cuenta`,
      });
    }
  };

  const formatoEquipo = (equipo, enCuenta) => {
    return equipo
      .filter((eq) => (enCuenta ? eq.Usuario.activo : eq.activo))
      .map((eq) => ({
        ...eq.Usuario,
        [enCuenta ? "agregar" : "quitar"]: (
          <Button
            size="sm"
            onClick={() =>
              actionUsuario(eq.Usuario.id, eq.Usuario.nombre, enCuenta)
            }
          >
            <FA icon={enCuenta ? "plus" : "minus"} />
          </Button>
        ),
      }));
  };

  return (
    <Equipo
      equipo={equipo}
      libres={libres}
      loadEquipo={loadEquipo}
      formatoEquipo={formatoEquipo}
    />
  );
}
