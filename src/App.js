import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";
import { dropdownOptions } from "./constants";
import { createOptionsObj } from "./utils";
import "./App.css";

function App() {
  const initialCheckboxes = createOptionsObj(dropdownOptions);

  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxClick = (e) => {
    const { name } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));

    const isOptionDisplayed = selectedOptions.includes(name);
    if (!isOptionDisplayed) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        name,
      ]);
    } else {
      const index = selectedOptions.indexOf(name);
      let newSelectedOptions = [...selectedOptions];
      newSelectedOptions.splice(index, 1);
      setSelectedOptions(newSelectedOptions);
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

    setSelectedOptions(dropdownOptions);
  };

  const deSelectAllCheckboxes = () => {
    selectAllCheckboxes(false);
    setSelectedOptions([]);
  };

  return (
    <div className="App">
      <Dropdown
        isDropdownExpanded={isDropdownExpanded}
        setIsDropdownExpanded={setIsDropdownExpanded}
        createCheckboxes={createCheckboxes}
        selectedOptions={selectedOptions}
        selectAllCheckboxes={selectAllCheckboxes}
        deSelectAllCheckboxes={deSelectAllCheckboxes}
      />
    </div>
  );
}

export default App;
