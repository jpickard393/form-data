import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
// import PegOptions from "./PegOptions";
// import Message from "./Message";

// const setInitialSelectionValues = () => ({
//   peg: "",
//   hole: "",
//   useSledgeHammer: false,
// });

const MainForm = () => {
  // const [selectionData, setSelectionData] = useState(
  //   setInitialSelectionValues()
  // );
  const [holeValue, setHoleValue] = useState("round");

  const handleHoleOnChange = (e) => {
    setHoleValue(e.target.value);
  };

  return (
    <HoleOptions
      holeValue={holeValue}
      handleOnChange={handleHoleOnChange}
    ></HoleOptions>
  );
};
export default MainForm;
