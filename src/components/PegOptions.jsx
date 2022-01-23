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
            className="peg-toggle"
            key={idx}
            id={`peg-${idx}`}
            type="radio"
            name="peg"
            value={radio.value}
            checked={selectionData.peg === radio.value}
            onChange={(e) => handleOnChange("peg", e?.target?.value)}
            variant="primary"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default PegOptions;
