import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const { REACT_APP_NAME } = process.env;

describe("App", () => {
  test("should render app title", () => {
    render(<App />);
    const element = screen.getByText(new RegExp(REACT_APP_NAME as string, "i"));
    expect(element).toBeInTheDocument();
  });
});
