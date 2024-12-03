import React, { useState } from "react";
import { scenarios } from "../data/data";

const Scenario = ({ scenarioKey, restart }) => {
  const [history, setHistory] = useState([]); // Store navigation history
  const [currentStep, setCurrentStep] = useState("start"); // Track current step
  const [selectedOption, setSelectedOption] = useState(null); // Track the current option
  const [selectedSubOption, setSelectedSubOption] = useState(null); // Track sub-options for nextOptions
  const [lastConsequence, setLastConsequence] = useState(""); // Track consequence for the last step

  const scenario = scenarios[scenarioKey]; // Fetch scenario by key

  // Determine the current data to display based on step
  const currentData =
    currentStep === "start"
      ? scenario
      : currentStep === "final"
      ? scenario.options[selectedOption].nextOptions[selectedSubOption]
      : scenario.options[selectedOption]?.nextOptions;

  // Handle option selection
  const handleOptionClick = (optionKey) => {
    const selectedOptionData =
      currentStep === "start"
        ? scenario.options[optionKey]
        : currentData[optionKey];

    // Save the current state in history for back navigation
    setHistory((prevHistory) => [
      ...prevHistory,
      {
        step: currentStep,
        option: selectedOption,
        subOption: selectedSubOption,
        consequence: lastConsequence,
      },
    ]);

    // Update selected option and consequence
    setLastConsequence(selectedOptionData?.consequence || "");
    if (currentStep === "start") {
      setSelectedOption(optionKey);
      setCurrentStep("consequence");
    } else if (selectedOptionData?.finalOutcome) {
      setSelectedSubOption(optionKey);
      setCurrentStep("final");
    } else {
      setSelectedSubOption(optionKey);
    }
  };

  // Handle "Back" button functionality
  const handleBackClick = () => {
    const lastStep = history.pop(); // Retrieve the last step from history
    if (lastStep) {
      setHistory([...history]); // Update history
      setCurrentStep(lastStep.step); // Restore previous step
      setSelectedOption(lastStep.option); // Restore previous option
      setSelectedSubOption(lastStep.subOption); // Restore sub-option
      setLastConsequence(lastStep.consequence); // Restore last consequence
    }
  };

  return (
    <div>
      {/* Display scenario title */}
      <h1>{scenario.title}</h1>

      {/* Display description, consequence, or final outcome */}
      <p>
        {currentStep === "start"
          ? scenario.description // Show description on start
          : currentStep === "final"
          ? currentData?.finalOutcome // Show final outcome on final step
          : lastConsequence || ""} {/* Show the consequence */}
      </p>

      {currentStep === "final" ? (
        // If on the final step, show restart button
        <div>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        // Display options and "Back" button
        <div>
          {Object.entries(
            currentStep === "start"
              ? scenario.options
              : currentData || {}
          ).map(([key, value]) => (
            <button key={key} onClick={() => handleOptionClick(key)}>
              {value.text}
            </button>
          ))}

          {/* Show Back button if there's history */}
          {history.length > 0 && (
            <button onClick={handleBackClick}>Back</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Scenario;
