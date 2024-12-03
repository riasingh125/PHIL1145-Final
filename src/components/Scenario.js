import React, { useState, useEffect } from "react";
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
      ? scenario.options[selectedOption]?.nextOptions[selectedSubOption]
      : scenario.options[selectedOption]?.nextOptions;

  // Determine the type for background color
  const currentType =
    currentStep === "final"
      ? currentData?.type_finalOutcome
      : currentData
      ? scenario.options[selectedOption]?.type_consequence
      : null;

  // Update background color based on the type
  useEffect(() => {
    if (currentType === "negative") {
      document.body.style.backgroundColor = "red";
    } else if (currentType === "positive") {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "lavender"; // Default for other cases
    }
  }, [currentType, currentStep, selectedOption, selectedSubOption]);

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

  // Handle Restart button
  const handleRestart = () => {
    setHistory([]);
    setCurrentStep("start");
    setSelectedOption(null);
    setSelectedSubOption(null);
    setLastConsequence("");
    document.body.style.backgroundColor = "lavender"; // Reset background to lavender
    restart(); // Call the restart callback
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
          <button onClick={handleRestart}>Restart</button>
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
