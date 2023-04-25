import React from "react";
import { TabPanel } from "@chakra-ui/react";
import TabContainer from "components/TabContainer";
import Lista from "./Lista";

export default function () {
  return (
    <TabContainer tabs={["Lista", "Nuevo rol"]} style={{ padding: 0 }}>
      <TabPanel>
        <Lista />
      </TabPanel>
      <TabPanel>NUevo</TabPanel>
    </TabContainer>
  );
}
