import React from "react";
import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";

function Usuario({ tabs, children }) {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card>
        <Tabs>
          <TabList>
            {tabs.map((item) => (
              <Tab>{item}</Tab>
            ))}
          </TabList>
          <TabPanels>{children}</TabPanels>
        </Tabs>
      </Card>
    </Flex>
  );
}

export default Usuario;
