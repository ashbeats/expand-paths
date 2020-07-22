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

  const expand = envKey => (pathInsideUser, ensureExists = true) =>
    maybeReal(path.join(process.env[envKey], pathInsideUser), ensureExists);

  /**
   *
   * @type {function(*=, *=): string}
   */
  const expandUserPath = expand("USERPROFILE");

  /**
   *
   * @type {function(*=, *=): string}
   */
  const expandAppData = expand("APPDATA");

  return Object.freeze({
    expandUserPath,
    expandAppData,
    expand,
    maybeReal
  });
};
