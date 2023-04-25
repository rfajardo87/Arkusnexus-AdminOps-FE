import React from "react";
import { TabPanel } from "@chakra-ui/react";
import TabContainer from "components/TabContainer";
import Cuentas from "./components/Cuentas";
import Form from "./components/Form";

export default function Cuenta() {
  return (
    <TabContainer tabs={["Cuentas", "Form"]}>
      <TabPanel>
        <Cuentas />
      </TabPanel>
      <TabPanel>
        <Form />
      </TabPanel>
    </TabContainer>
  );
}
