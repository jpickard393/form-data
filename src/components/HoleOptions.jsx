import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const HoleOptions = ({ selectionData, handleOnChange }) => {
  const [radioValue, setRadioValue] = useState("");
  const radios = [
    { name: "Round", value: "1" },
    { name: "Square", value: "2" },
  ];

  const setChecked = (e) => {
    console.log(e.value);
    console.log(selectionData);
    setRadioValue(e.currentTarget.value);
    return radioValue === e.value;
  };

  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default HoleOptions;
