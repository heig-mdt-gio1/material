const _ = require("lodash");
const fs = require("fs");
const package = require("./package.json");
const version = "2024";

const config = {
  title: package.description,
  version,
  repoUrl: package.repository.url,
  remark: {
    highlightLines: true,
    highlightSpans: true,
    countIncrementalSlides: false,
    navigation: {
      click: false,
      scroll: false,
      touch: true
    }
  },
  publish: {
    gitUrl: "git@github.com:heig-mdt-gio1/material.git",
    baseUrl: "https://heig-mdt-gio1.github.io/material/",
    branch: "gh-pages",
    version
  },
  subjectScripts: ["https://embed.runkit.com"]
};

// Load `config.local.js` if it exists
if (fs.existsSync("./config.local.js")) {
  _.merge(config, require("./config.local"));
}

module.exports = config;
