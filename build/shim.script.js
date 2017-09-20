var fs = require("fs");
var path = require("path");

var dir1 = path.join(__dirname, "../dist/ReactShim.js");
var str1 = fs.readFileSync(dir1, "utf-8");
var text = str1
  .replace(/Object\.freeze/g, "extend")
  .replace(/\/\/freeze_start[\s\S]+?freeze_end/, "");

fs.writeFileSync(dir1, text, { encoding: "utf8" });

var dir2 = path.join(__dirname, "../dist/React.js");
var str2 = fs.readFileSync(dir2, "utf-8");
var text2 = str2
  .replace(/Object\.freeze/g, "extend")
  .replace(/\/\/freeze_start([\s\S]+?)freeze_end/, "");

fs.writeFileSync(dir2, text2, { encoding: "utf8" });

var dir3 = path.join(__dirname, "../dist/ReactIE.js");
var str3 = fs.readFileSync(dir3, "utf-8");
var text3 = str3
  .replace(/Object\.freeze/g, "extend")
  .replace(/\/\/freeze_start([\s\S]+?)freeze_end/, "");

fs.writeFileSync(dir3, text3, { encoding: "utf8" });
