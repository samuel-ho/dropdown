import React from 'react';
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

export default function Checkbox({ label, handleCheckboxClick, isChecked }) {
    
    return (
        <Label>
            <input
                type="checkbox"
                name={label}
                onChange={handleCheckboxClick}
                checked={isChecked}
            />
        </Label>
    )
}

