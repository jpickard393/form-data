import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";
// make components from one parent
const selectionValues = [
  { item: "peg", shape: "" },
  { item: "hole", shape: "" },
];

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(selectionValues);

  const handleOnChange = (data, e) => {
    const selectedShape = e?.target?.value;
    setSelectionData((state) => ({ ...state, [data]: selectedShape }));
  };

  const formData = { selectionData, handleOnChange };

  return (
    <div>
      <PegOptions {...formData} />
      <HoleOptions {...formData} />
    </div>
  );
};
export default MainForm;
