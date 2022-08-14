import React from "react";
import ReactDOM from "react-dom";

const HeadMock: React.FC<{children: React.ReactNode}> = ({ children }) => <>{ReactDOM.createPortal(children, document.head)}</>;

jest.doMock("next/head", () => HeadMock);
