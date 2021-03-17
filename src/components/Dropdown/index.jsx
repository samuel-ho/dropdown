import React from "react";
import styled from "styled-components";

import "./Dropdown.css";

const Checkboxes = styled.div`
  display: ${(props) => (!props.isExpanded ? "block" : "none")};
`;

export default function Dropdown(props) {
  const {
    isDropdownExpanded,
    setIsDropdownExpanded,
    createCheckboxes,
    selectedOptions,
  } = props;

  return (
    <form>
      <div className="multiselect">
        <div
          className="selectBox"
          onClick={() => setIsDropdownExpanded(!isDropdownExpanded)}
        >
          <div> Selected Options: {selectedOptions}</div>
          <select>{selectedOptions}</select>
          <div className="overSelect"></div>
        </div>
        <Checkboxes isExpanded={props.isDropdownExpanded}>
          {createCheckboxes()}
        </Checkboxes>
      </div>
    </form>
  );
}
