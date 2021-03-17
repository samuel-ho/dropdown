import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";
import { dropdownOptions } from "./constants";
import { createInitialState } from "./utils";
import "./App.css";

function App() {
  const initialCheckboxes = createInitialState(dropdownOptions);

  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxClick = (e) => {
    const { name } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));

    const isCheckboxDisplayed = selectedCheckboxes.includes(name);
    if (!isCheckboxDisplayed) {
      setSelectedCheckboxes((prevSelectedCheckboxes) => [
        ...prevSelectedCheckboxes,
        name,
      ]);
    } else {
      const index = selectedCheckboxes.indexOf(name);
      let newSelectedCheckboxes = [...selectedCheckboxes];
      newSelectedCheckboxes.splice(index, 1);
      setSelectedCheckboxes(newSelectedCheckboxes);
    }
  };

  const createCheckbox = (option) => {
    return (
      <Checkbox
        label={option}
        isChecked={checkboxes[option]}
        handleCheckboxClick={handleCheckboxClick}
        key={option}
      />
    );
  };

  const createCheckboxes = () =>
    dropdownOptions.map((option) => createCheckbox(option));

  const selectAllCheckboxes = (isChecked) => {
    for (let option in checkboxes) {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [option]: isChecked,
      }));
    }

    setSelectedCheckboxes(dropdownOptions);
  };

  const deSelectAllCheckboxes = () => {
    selectAllCheckboxes(false);
    setSelectedCheckboxes([]);
  };

  return (
    <div className="App">
      <Dropdown
        isDropdownExpanded={isDropdownExpanded}
        setIsDropdownExpanded={setIsDropdownExpanded}
        createCheckboxes={createCheckboxes}
        selectedCheckboxes={selectedCheckboxes}
        selectAllCheckboxes={selectAllCheckboxes}
        deSelectAllCheckboxes={deSelectAllCheckboxes}
      />
    </div>
  );
}

export default App;
