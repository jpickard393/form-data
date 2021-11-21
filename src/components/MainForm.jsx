import React, { useState } from "react";
import HoleOptions from "./HoleOptions";
// import PegOptions from "./PegOptions";
// import Message from "./Message";

const setInitialSelectionValues = () => ({
  peg: "",
  hole: "",
  useSledgeHammer: false,
});

const MainForm = () => {
  const [selectionData, setSelectionData] = useState(
    setInitialSelectionValues()
  );

  const handleOnChange = (name) => (data) => {
    const resolvers = {
      string: (data) => data,
      object: (data) => ("value" in data ? data.value : data),
    };
    const inputType = typeof data;
    setSelectionData((state) => ({
      ...state,
      [name]: resolvers[inputType]?.(data),
    }));
  };

  const formData = { selectionData, handleOnChange };

  console.log(selectionData);

  return <HoleOptions {...formData}></HoleOptions>;
};
export default MainForm;
