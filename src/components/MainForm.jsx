import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";

const selectionValues = () => ({
  peg: "",
  hole: "",
  forceIt: false,
});

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(selectionValues);

  const handleOnChange = (data, e) => {
    const selectedShape = e?.target?.value;
    setSelectionData((state) => ({ ...state, [data]: selectedShape }));
  };

  const formData = { selectionData, handleOnChange };

  console.log(selectionData);

  return (
    <div>
      <PegOptions {...formData} />
      <HoleOptions {...formData} />
    </div>
  );
};
export default MainForm;
