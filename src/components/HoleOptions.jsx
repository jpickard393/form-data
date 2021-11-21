import React, { useState, useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
const HoleOptions = () => {
  const [radioValue, setRadioValue] = useState("round");
  const radios = [
    { name: "Round", value: "round" },
    { name: "Square", value: "square" },
  ];

  const handleHoleOnChange = (e) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    console.log(radioValue);
  });

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
            onChange={handleHoleOnChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};
export default HoleOptions;
