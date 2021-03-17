import React from "react";
import styled from "styled-components";

import Button from '../Button';
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
    selectAllCheckboxes,
    deSelectAllCheckboxes
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
        <Button onClick={() => selectAllCheckboxes(true)}> Select All </Button>
        <Button onClick={() => deSelectAllCheckboxes(false)}> Deselect All </Button>
        </Checkboxes>
      </div>
    </form>
  );
}
