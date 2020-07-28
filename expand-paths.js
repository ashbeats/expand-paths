"use strict";

const path = require("path");
const fs = require("fs");

// =====================================================
// Quick way to get paths to %USERPROFILE%, %APPDATA% and others.
// Works on linux and windows
// =====================================================

const { platform } = process;
let windows = platform.startsWith("win");
const maybeReal = (p, ensureExists) => (ensureExists ? fs.realpathSync(p) : p);

// prettier-ignore
const expandAnyPath = 
              source => 
              envKey => 
              ( relativeChildPath = ".",  ensureExists = true ) => 
                  !(envKey in source)                   
                  ? null 
                  : maybeReal(path.join(source[envKey], relativeChildPath), ensureExists);

// prettier-ignore
const expandUserPath = 
          (relativeChildPath = ".",  ensureExists = true ) => 
              expandAnyPath(process.env)
              (windows === true ? "USERPROFILE" : "HOME")
              (relativeChildPath, ensureExists);

const expandAppData = expandAnyPath(process.env)("APPDATA");

module.exports = {
  expandAppData,
  expandUserPath,
  expandAnyPath,
  maybeReal
};

// expandUserPath(".") is platform agnostic. Works on linux, mac and windows
