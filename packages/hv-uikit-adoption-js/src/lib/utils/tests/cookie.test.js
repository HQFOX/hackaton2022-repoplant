import jsCookie from "js-cookie";
import { getCookie, setCookie, removeCookie } from "../cookie";

jest.mock("js-cookie");

describe("cookie", () => {
  const key = "cookie";
  const value = "test";

  beforeEach(() => {
    jsCookie.mockClear();
  });

  describe("get cookie", () => {
    const jsCookieGetSpy = jest.spyOn(jsCookie, "get");
    beforeEach(() => {
      jsCookieGetSpy.mockClear();
    });

    it("getCookie method gets the cookie", () => {
      getCookie(key);
      expect(jsCookieGetSpy).toHaveBeenCalledTimes(1);
      expect(jsCookieGetSpy).toHaveBeenCalledWith(key);

      getCookie(key, { headers: { cookie: "test" } });
      expect(jsCookieGetSpy).toHaveBeenCalledTimes(2);
      expect(jsCookieGetSpy).toHaveBeenCalledWith(key);
    });
  });

  describe("set cookie", () => {
    const jsCookieSetSpy = jest.spyOn(jsCookie, "set");

    beforeEach(() => {
      jsCookieSetSpy.mockClear();
    });

    it("setCookie method sets the cookie", () => {
      setCookie({ key, value });
      expect(jsCookieSetSpy).toHaveBeenCalledWith(key, value);
    });
  });

  describe("remove cookie", () => {
    const jsCookieRemoveSpy = jest.spyOn(jsCookie, "remove");

    beforeEach(() => {
      jsCookieRemoveSpy.mockClear();
    });

    it("removeCookie method removes the cookie", () => {
      removeCookie(key);
      expect(jsCookieRemoveSpy).toHaveBeenCalledTimes(1);
      expect(jsCookieRemoveSpy).toHaveBeenCalledWith(key);
    });
  });
});
