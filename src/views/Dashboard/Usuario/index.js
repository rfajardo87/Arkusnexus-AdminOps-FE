import React from "react";
import TabContainer from "components/TabContainer";
import Usuarios from "./components/Usuarios";
import { TabPanel } from "@chakra-ui/react";
import Roles from "./components/Roles";

function Usuario() {
  return (
    <TabContainer tabs={["Usuarios", "Form", "Roles"]}>
      <TabPanel>
        <Usuarios />
      </TabPanel>
      <TabPanel>Form</TabPanel>
      <TabPanel>
        <Roles />
      </TabPanel>
    </TabContainer>
  );
}

export default Usuario;
