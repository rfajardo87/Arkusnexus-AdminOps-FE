import React from "react";
import { TabPanel } from "@chakra-ui/react";
import TabContainer from "components/TabContainer";
import Usuarios from "./components/Usuarios";
import Roles from "./components/Roles";
import Form from "./components/Form";

function Usuario() {
  return (
    <TabContainer tabs={["Usuarios", "Nuevo", "Roles"]}>
      <TabPanel>
        <Usuarios />
      </TabPanel>
      <TabPanel>
        <Form />
      </TabPanel>
      <TabPanel>
        <Roles />
      </TabPanel>
    </TabContainer>
  );
}

export default Usuario;
