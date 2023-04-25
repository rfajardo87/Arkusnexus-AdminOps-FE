import React from "react";
import TabContainer from "components/TabContainer";
import Usuarios from "./components/Usuarios";
import { TabPanel } from "@chakra-ui/react";

function Usuario() {
  return (
    <TabContainer tabs={["Usuarios", "Form"]}>
      <TabPanel>
        <Usuarios />
      </TabPanel>
      <TabPanel>Form</TabPanel>
    </TabContainer>
  );
}

export default Usuario;
