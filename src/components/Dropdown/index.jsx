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
    selectedCheckboxes,
    selectAllCheckboxes,
    deSelectAllCheckboxes
  } = props;

  return (
    <form className="form">
      <div className="multiselect">
        <div
          className="selectBox"
          onClick={() => setIsDropdownExpanded(!isDropdownExpanded)}
        >
          <div> Selected Options: {selectedCheckboxes}</div>
          <select>{selectedCheckboxes}</select>
          <div className="overSelect"></div>
        </div>
        <Checkboxes isExpanded={props.isDropdownExpanded}>
          {createCheckboxes()}
        </Checkboxes>
        <Button onClick={() => selectAllCheckboxes(true)}> Select All </Button>
        <Button onClick={() => deSelectAllCheckboxes(false)}> Deselect All </Button>
      </div>
    </form>
  );
}
