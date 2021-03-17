import "./App.css";
import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import { dropdownOptions } from "./constants";
import { createOptionsObj } from "./utils";

function App() {
  const initialCheckboxes = createOptionsObj(dropdownOptions);
  const [isExpanded, setIsExpanded] = useState(false); // state keeping track of whether or not the dropdown is open or closed
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  console.log(checkboxes, "checkboxes")
  // App needs to know which checkboxes are selected


  
  return (
    <div className="App">
      <Dropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </div>
  );
}

export default App;
