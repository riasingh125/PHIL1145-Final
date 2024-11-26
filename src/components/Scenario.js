import React, { useState } from "react";
import { scenarios } from "../data/data";

const Scenario = ({ scenarioKey, restart }) => {
  const [history, setHistory] = useState([]); // Store history of steps
  const [currentStep, setCurrentStep] = useState("start"); // Track current step
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const scenario = scenarios[scenarioKey]; // Fetch scenario based on key

  // Determine current data to display
  const currentData =
    currentStep === "start"
      ? scenario
      : currentStep === "final"
      ? scenario.options[selectedOption]
      : scenario.options[selectedOption]?.nextOptions;

  // Handle option selection
  const handleOptionClick = (optionKey) => {
    // Save the current state in history for "Back" navigation
    setHistory((prevHistory) => [
      ...prevHistory,
      { step: currentStep, option: selectedOption },
    ]);

    // If selecting from the starting options, move to consequences
    if (currentStep === "start") {
      setSelectedOption(optionKey);
      setCurrentStep("consequence");
    } 
    // If reaching a final outcome, move to the final step
    else if (currentData[optionKey]?.finalOutcome) {
      setSelectedOption(optionKey);
      setCurrentStep("final");
    } 
    // Otherwise, continue navigating nested options
    else {
      setSelectedOption(optionKey);
    }
  };

  // Handle "Back" button functionality
  const handleBackClick = () => {
    const lastStep = history.pop(); // Retrieve the previous step
    if (lastStep) {
      setHistory([...history]); // Update history without the last step
      setCurrentStep(lastStep.step); // Restore previous step
      setSelectedOption(lastStep.option); // Restore previous option
    }
  };

  return (
    <div>
      {/* Display scenario title */}
      <h1>{scenario.title}</h1>
      
      {/* Display description, consequence, or final outcome */}
      <p>
        {currentStep === "start"
          ? scenario.description
          : currentStep === "final"
          ? currentData?.finalOutcome
          : currentData?.consequence || ""}
      </p>

      {currentStep === "final" ? (
        // If on the final step, show restart button
        <div>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        // Display available options and Back button
        <div>
          {/* Render buttons for current options */}
          {Object.entries(
            currentStep === "start"
              ? scenario.options
              : currentData || {}
          ).map(([key, value]) => (
            <button key={key} onClick={() => handleOptionClick(key)}>
              {value.text}
            </button>
          ))}

          {/* Show Back button if history exists */}
          {history.length > 0 && (
            <button onClick={handleBackClick}>Back</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Scenario;
