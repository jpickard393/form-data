import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const HoleOptions = ({ selectionData, handleOnChange }) => {
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];
  return (
    <div>
      <ButtonGroup className="holeOptions">
        <label className="optionLabel">Hole Shape</label>
        {radios.map((radio, idx) => (
          <ToggleButton
            className="toggle"
            key={idx}
            id={`hole-${idx}`}
            type="radio"
            name="hole"
            value={radio.value}
            checked={selectionData.hole === radio.value}
            onChange={(e) => handleOnChange("hole", e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default HoleOptions;
