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
  //const [pegValue, setPegValue]= useState();

  const handleHoleOnChange = (e) => {
    setHoleValue(e.target.value);
    console.log(holeValue);
  };

  // const handleOnChange = (name) => (data) => {
  //   console.log(name, data);
  //   const resolvers = {
  //     string: (data) => data,
  //     object: (data) => ("value" in data ? data.value : data),
  //   };
  //   const inputType = typeof data;
  //   setSelectionData((state) => ({
  //     ...state,
  //     [name]: resolvers[inputType]?.(data),
  //   }));
  // };

  const formData = { holeValue, handleHoleOnChange };

  return <HoleOptions {...formData}></HoleOptions>;
};
export default MainForm;
