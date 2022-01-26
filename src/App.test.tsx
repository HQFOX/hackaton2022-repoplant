import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const { REACT_APP_NAME } = process.env;

const renderWithFallback = () =>
  render(
    <Suspense fallback>
      <App />
    </Suspense>
  );

describe("App", () => {
  test("should render app title", () => {
    renderWithFallback();
    const element = screen.getByText(new RegExp(REACT_APP_NAME as string, "i"));

    expect(element).toBeInTheDocument();
  });
});
