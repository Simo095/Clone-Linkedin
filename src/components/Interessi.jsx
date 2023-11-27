import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const Interessi = () => {
  const [key, setKey] = useState("Aziende");
  return (
    <div className="border border-1 rounded mt-2 p-2 bg-light ">
      <h4>Interessi</h4>
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
        variant="underline"
        style={{ borderBottom: "1px solid grey" }}>
        <Tab
          eventKey="Aziende"
          title="Aziende"
          className="mt-3 mb-3">
          Le aziende che segui compariranno qui
        </Tab>
        <Tab
          eventKey="Scuole e università"
          title="Scuole e università"
          className="mt-3 mb-3">
          Le scuole che hai seguito compariranno qui
        </Tab>
      </Tabs>
    </div>
  );
};

export default Interessi;
