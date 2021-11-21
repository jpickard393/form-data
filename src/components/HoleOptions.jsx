import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const HoleOptions = ({ holeValue, handleOnChange }) => {
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];

  useEffect(() => {
    console.log("holeValue", holeValue);
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
            checked={holeValue === radio.value}
            onChange={(e) => handleOnChange(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default HoleOptions;
