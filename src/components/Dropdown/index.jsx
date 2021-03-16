import React from "react";
import styled from "styled-components";

import "./Dropdown.css";

const Checkboxes = styled.div`
  display: ${(props) => (!props.isExpanded ? "block" : "none")};
`;

const Label = styled.label`
  display: block;
`;

export default function Dropdown(props) {
  const { isExpanded, setIsExpanded } = props;

  return (
    <form>
      <div className="multiselect">
        <div className="selectBox" onClick={() => setIsExpanded(!isExpanded)}>
          <select>
            <option>Select an option</option>
          </select>
          <div className="overSelect"></div>
        </div>
        <Checkboxes isExpanded={props.isExpanded}>
          <Label htmlFor="one">
            <input type="checkbox" id="one" />
            First checkbox
          </Label>
          <Label htmlFor="two">
            <input type="checkbox" id="two" />
            Second checkbox
          </Label>
          <Label htmlFor="three">
            <input type="checkbox" id="three" />
            Third checkbox
          </Label>
        </Checkboxes>
      </div>
    </form>
  );
}
