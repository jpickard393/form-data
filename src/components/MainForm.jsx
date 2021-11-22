import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";

const setInitialSelectionValues = () => ({
  peg: "",
  hole: "",
  forceIt: false,
});

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(
    setInitialSelectionValues()
  );

  // need to keep existing state.  ie. both peg and hole not refresh
  const handleOnChange = (e, dataType) => {
    const property = e?.target?.value;
    setSelectionData({ name: dataType, value: property });
  };

  console.log(selectionData);

  const formData = { selectionData, handleOnChange };

  return (
    <>
      <PegOptions {...formData} />
      <HoleOptions {...formData} />
    </>
  );
};
export default MainForm;
