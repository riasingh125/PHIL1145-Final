import React, { useState } from "react";
import Scenario from "./components/Scenario";
import { scenarios } from "./data/data";

const App = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const restart = () => setSelectedScenario(null);

  return (
    <div className="App">
      {!selectedScenario ? (
        <div>
          <h1>Choose Your Adventure</h1>
          {Object.keys(scenarios).map((key) => (
            <button key={key} onClick={() => setSelectedScenario(key)}>
              {scenarios[key].title}
            </button>
          ))}
        </div>
      ) : (
        <Scenario scenarioKey={selectedScenario} restart={restart} />
      )}
    </div>
  );
};

export default App;
