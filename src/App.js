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
  const [selectedOptions, setSelectedOptions] = useState("");

  const handleCheckboxClick = (e) => {
    const { name } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));

    var newSelectedOptions = selectedOptions.concat(` ${name}`);
    setSelectedOptions(newSelectedOptions);
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

  const createCheckboxes = () => {
    return dropdownOptions.map((option) => createCheckbox(option));
  };

  console.log(selectedOptions, "selectedOptions");
  return (
    <div className="App">
      <Dropdown
        isDropdownExpanded={isDropdownExpanded}
        setIsDropdownExpanded={setIsDropdownExpanded}
        createCheckboxes={createCheckboxes}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

export default App;
