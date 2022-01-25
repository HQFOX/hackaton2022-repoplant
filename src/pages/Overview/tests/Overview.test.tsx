import React from "react";
import { render, screen } from "@testing-library/react";

import GlobalProvider from "lib/providers/GlobalProvider";
import Overview from "../Overview";

const renderWithProvider = () =>
  render(
    <GlobalProvider>
      <Overview />
    </GlobalProvider>
  );

describe("Overview", () => {
  test("should match the snapshot", () => {
    const { container } = renderWithProvider();
    expect(container).toMatchSnapshot();
  });

  test("should render cards title", () => {
    renderWithProvider();
    const charactersCardTitle = screen.getByText(/charactersCard.title/i);
    const starshipsCardTitle = screen.getByText(/starshipsCard.title/i);

    expect(charactersCardTitle).toBeInTheDocument();
    expect(starshipsCardTitle).toBeInTheDocument();
  });
});
