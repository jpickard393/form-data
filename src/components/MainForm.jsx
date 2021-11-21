import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";
import { ButtonGroup } from "react-bootstrap";

const setInitialSelectionValues = () => ({
  peg: "",
  hole: "",
  useSledgeHammer: false,
});

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(
    setInitialSelectionValues()
  );

  // need to match up the peg and the hole
  // based on the target type and value
  const handleHoleOnChange = (event) => {
    const newValue = event.target.value;
    setSelectionData({ hole: newValue });
  };

  const handlePegOnChange = (event) => {
    const newValue = event.target.value;
    setSelectionData({ peg: newValue });
  };

  return (
    <>
      <PegOptions
        selectionData={selectionData}
        handleOnChange={handlePegOnChange}
      />
      <HoleOptions
        selectionData={selectionData}
        handleOnChange={handleHoleOnChange}
      />
    </>
  );
};
export default MainForm;
