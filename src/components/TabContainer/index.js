import React from "react";
import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";

function TabContainer({ tabs, children , style={}}) {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} style={style}>
      <Card>
        <Tabs>
          <TabList>
            {tabs.map((item) => (
              <Tab key={item}>{item}</Tab>
            ))}
          </TabList>
          <TabPanels>{children}</TabPanels>
        </Tabs>
      </Card>
    </Flex>
  );
}

export default TabContainer;
