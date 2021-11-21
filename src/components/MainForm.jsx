import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";

const setInitialSelectionValues = () => ({
  peg: "",
  hole: "",
  useSledgeHammer: false,
});

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(
    setInitialSelectionValues()
  );

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setSelectionData({ hole: newValue });
  };

  return (
    <>
      <PegOptions
        selectionData={selectionData}
        handleOnChange={handleOnChange}
      />
      <HoleOptions
        selectionData={selectionData}
        handleOnChange={handleOnChange}
      />
    </>
  );
};
export default MainForm;
