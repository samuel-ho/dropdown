import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import { dropdownOptions } from './constants';
import { createOptionsObj } from './utils';


function App() {
  const initialCheckboxes = createOptionsObj(dropdownOptions);
  const [isExpanded, setIsExpanded] = useState(false); // state keeping track of whether or not the dropdown is open or closed
  const [checkboxes, SetCheckboxes] = useState(initialCheckboxes)
  const [selectedValues, setSelectedValues] = useState([])

  // create an event handler for when a checkbox is clicked
  // when a checkbox is clicked, we want to update state for that one 
  // option to the opposite of what it currently is
  const handleCheckboxClick = e => {
    const { name } = e.target.value;

  }

  console.log(checkboxes, "checkboxes")
  return (
    <div className="App">
      <Dropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </div>
  );
}

export default App;
