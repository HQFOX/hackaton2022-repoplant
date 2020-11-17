import React from "react";
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import AssetInventory from "..";

describe("<AssetInventory />", () => {
  let component;

  const WithProvider = withStoreProvider(AssetInventory, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    logout: jest.fn()
  });

  beforeEach(() => {
    component = mount(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be rendered", () => {
    const assetInventory = component.find(AssetInventory);
    expect(assetInventory.length).toBe(1);
  });
});
