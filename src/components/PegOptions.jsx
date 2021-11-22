import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const PegOptions = ({ selectionData, handleOnChange }) => {
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];

  return (
    <div>
      <ButtonGroup className="pegOptions">
        <label className="optionLabel">Peg Shape</label>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="toggle"
            key={idx}
            id={`peg-${idx}`}
            type="radio"
            name="pegRadio"
            value={radio.value}
            checked={
              selectionData.name === "peg" &&
              selectionData.value === radio.value
            }
            onChange={(e) => handleOnChange(e, "peg")}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default PegOptions;
