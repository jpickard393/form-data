import React from "react";
const Message = ({ selectionValid, messageText }) => {
  const colourClass = selectionValid ? "validColour" : "invalidColour";
  return (
    <div>
      <div className={colourClass}>{messageText}</div>
    </div>
  );
};
export default Message;
