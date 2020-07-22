"use strict";

const path = require("path");
const fs = require("fs");
/***
 *  Quick way to get paths to %USERPROFILE%, %APPDATA%. 
 *
 * @url     https://github.com/ashbeats
 * @returns {Readonly<{expandUserPath: (function(*=, *=): string), expand: (function(*): function(*=, *=): string), expandAppData: (function(*=, *=): string), maybeReal: (function(*=, *): any)}>}
 */
module.exports["default"] = function() {
  const maybeReal = (p, ensureExists) =>
    ensureExists ? fs.realpathSync(p) : p;

  const expand = envKey => source => (pathInsideUser, ensureExists = true) =>
    maybeReal(path.join(source[envKey], pathInsideUser), ensureExists);

  /**
   *
   * @type {function(*=, *=): string}
   */
  const expandUserPath = expand("USERPROFILE")(process.env);

  /**
   *
   * @type {function(*=, *=): string}
   */
  const expandAppData = expand("APPDATA")(process.env);

  return Object.freeze({
    expandUserPath,
    expandAppData,
    expand,
    maybeReal
  });
};
