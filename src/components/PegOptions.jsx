import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const PegOptions = ({ selectionData, handleOnChange }) => {
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];

  useEffect(() => {
    console.log("selectionData.peg", selectionData.peg);
  });

  return (
    <div>
      <ButtonGroup className="pegOptions">
        <label className="optionLabel">Peg Shape</label>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`peg-${idx}`}
            type="radio"
            name="pegRadio"
            value={radio.value}
            checked={selectionData.peg === radio.value}
            onChange={handleOnChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default PegOptions;
