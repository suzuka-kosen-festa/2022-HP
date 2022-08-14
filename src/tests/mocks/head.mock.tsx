import React from "react";
import ReactDOM from "react-dom";

const HeadMock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.Fragment>{ReactDOM.createPortal(children, document.head)}</React.Fragment>
);

jest.doMock("next/head", () => HeadMock);
