import React, { useEffect, useState } from "react";
import HoleOptions from "./HoleOptions";
import PegOptions from "./PegOptions";
import Message from "./Message";

const selectionValues = {
  peg: "",
  hole: "",
  forceIt: false,
};

const MainForm = () => {
  const [messageText, setMessageText] = useState("");
  const [selectionValid, setSelectionValid] = useState(false);
  const [selectionData, setSelectionData] = useState(selectionValues);

  const validateSelection = () => {
    if (selectionData.peg && selectionData.hole) {
      if (selectionData.peg === selectionData.hole) {
        setSelectionValid(true);
        setMessageText("Yes that will work");
      } else {
        setSelectionValid(false);
        setMessageText("No that will not work");
      }
    }
  };

  useEffect(() => {
    validateSelection();
  }, [selectionData]);

  const handleOnChange = (buttonType, selectedShape) => {
    setSelectionData((prevState) => ({ ...prevState, [buttonType]: selectedShape }));
  };

  const formData = { selectionData, handleOnChange };
  return (
    <div>
      <PegOptions {...formData} />
      <HoleOptions {...formData} />
      <Message className="messageRow" selectionValid={selectionValid} messageText={messageText} />
    </div>
  );
};

export default MainForm;