import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: clientY });
    };
    window.addEventListner("mousemove", move);
  });
  return (
    <CursorContext.Provider value={"this is the cursor"}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
