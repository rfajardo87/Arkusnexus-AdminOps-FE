import React, { useState } from "react";
import { TabPanel } from "@chakra-ui/react";
import TabContainer from "components/TabContainer";
import { CuentaListContext } from "shared/context/cuenta";

import Cuentas from "./components/Cuentas";
import Form from "./components/Form";
import Equipo from "./components/Equipo";

export default function Cuenta() {
  const [cuentas, setCuentas] = useState([]);
  return (
    <CuentaListContext.Provider value={{ cuentas, setCuentas }}>
      <TabContainer tabs={["Cuentas", "Form", "Equipo"]}>
        <TabPanel>
          <Cuentas />
        </TabPanel>
        <TabPanel>
          <Form />
        </TabPanel>
        <TabPanel>
          <Equipo />
        </TabPanel>
      </TabContainer>
    </CuentaListContext.Provider>
  );
}
