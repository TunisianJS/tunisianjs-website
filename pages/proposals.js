import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

import { Layout } from "../layout";
import SectionWrapper from "../components/SectionWrapper";

export default function Proposals() {
  const centerContentStyles = { display: "flex", justifyContent: "center" };

  return (
    <Layout>
      <h2 style={{ marginTop: "100px" }}>NOTE: work in progress 🚧 ...</h2>
      <br />
      <SectionWrapper
        pin="proposals"
        title="Submit your proposals"
        subtitle="<----- description about the current actions ----->"
      >
        <div style={{ height: "350px" }}>
          <Tabs>
            <TabList style={centerContentStyles}>
              <Tab>Speaker/Talk</Tab>
              <Tab>Sponsors</Tab>
              <Tab>Suggestions</Tab>
              <Tab>Reporting</Tab>
            </TabList>
            {/* ---- TODO: should add these 4 components ---- */}
            <TabPanels style={centerContentStyles}>
              <TabPanel>
                <p>Speaker/Talk component!</p>
              </TabPanel>
              <TabPanel>
                <p>Sponsors component!</p>
              </TabPanel>
              <TabPanel>
                <p>Suggestions component!</p>
              </TabPanel>
              <TabPanel>
                <p>Reporting component!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
