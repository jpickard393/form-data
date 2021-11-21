import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const HoleOptions = ({ selectionData, handleOnChange }) => {
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];

  useEffect(() => {
    console.log("selectionData", selectionData.hole);
  });

  return (
    <div>
      <ButtonGroup className="holeOptions">
        <label className="optionLabel">Hole Shape</label>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={selectionData.hole === radio.value}
            onChange={handleOnChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default HoleOptions;
