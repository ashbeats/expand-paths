"use strict";

const windows = process["platform"].startsWith("win");
const expand = require("../expand-paths.js");

describe("Can Expand Paths?", () => {
  
  test("expandUserPath() works on all platforms?", () => {
    expect(expand.expandUserPath(".")).toBeTruthy();
  });

  test("expandAppData() on Windows only", () => {
    // todo - run this on on osx, linux and windows actions.
    if (windows) {
      expect(expand.expandAppData(".")).toBeTruthy();
    } else {
      expect(expand.expandAppData(".")).toBeFalsy();
    }
  });
});
