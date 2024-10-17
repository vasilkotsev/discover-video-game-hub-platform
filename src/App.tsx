import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>ONE!</p>
          </TabPanel>
          <TabPanel>
            <p>TWO!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}

export default App;
